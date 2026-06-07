import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { Skin } from './types';

function colorToThree(value: string | undefined, fallback: string) {
  try { return new THREE.Color(value || fallback); } catch { return new THREE.Color(fallback); }
}

export function VisualStage({ skin, pulse }: { skin: Skin; pulse: number }) {
  const mount = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = mount.current;
    if (!node) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 42;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.setAttribute('aria-hidden', 'true');
    node.appendChild(renderer.domElement);

    const density = Math.max(20, Math.min(260, Number(skin.visual?.density ?? 80)));
    const intensity = Math.max(0, Math.min(1.2, Number(skin.visual?.intensity ?? 0.5)));
    const positions = new Float32Array(density * 3);
    const colors = new Float32Array(density * 3);
    const accent = colorToThree(skin.palette.accent, '#ffffff');
    const fg = colorToThree(skin.palette.fg, '#ffffff');
    const preset = skin.visual?.preset ?? 'stars';

    for (let i = 0; i < density; i++) {
      const ix = i * 3;
      positions[ix] = (Math.random() - 0.5) * 110;
      positions[ix + 1] = (Math.random() - 0.5) * 70;
      positions[ix + 2] = (Math.random() - 0.5) * 70;
      const c = i % 3 === 0 ? accent : fg;
      colors[ix] = c.r; colors[ix + 1] = c.g; colors[ix + 2] = c.b;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: preset === 'code-rain' ? 0.6 : 0.9, vertexColors: true, transparent: true, opacity: 0.25 + intensity * 0.38, blending: THREE.AdditiveBlending });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const ringGeo = new THREE.TorusGeometry(15, 0.025, 8, 160);
    const ringMat = new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.18 * intensity });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = 1.2;
    scene.add(ring);

    let raf = 0;
    const speed = reduced ? 0 : Math.max(0.05, Number(skin.visual?.speed ?? 0.3));
    const animate = () => {
      const t = performance.now() * 0.00015 * speed;
      points.rotation.y = t;
      points.rotation.x = Math.sin(t * 0.7) * 0.08;
      ring.rotation.z = -t * 1.8;
      ring.scale.setScalar(1 + Math.sin(t * 8 + pulse) * 0.025);
      const arr = geometry.getAttribute('position') as THREE.BufferAttribute;
      if (preset === 'code-rain' || preset === 'embers') {
        for (let i = 0; i < density; i++) {
          const y = arr.getY(i) + (preset === 'embers' ? 0.018 : -0.028) * speed;
          arr.setY(i, y > 38 ? -38 : y < -38 ? 38 : y);
        }
        arr.needsUpdate = true;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      node.removeChild(renderer.domElement);
      geometry.dispose(); material.dispose(); ringGeo.dispose(); ringMat.dispose(); renderer.dispose();
    };
  }, [skin.id]);

  return <div ref={mount} className="visual-stage" />;
}
