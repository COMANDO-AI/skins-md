import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { Skin } from './types';

function colorToThree(value: string | undefined, fallback: string) {
  try { return new THREE.Color(value || fallback); } catch { return new THREE.Color(fallback); }
}

export function VisualStage({ skin, pulse }: { skin: Skin; pulse: number }) {
  const mount = useRef<HTMLDivElement | null>(null);
  const hud = skin.visual?.hud ?? 'none';
  const particles = skin.visual?.particles ?? 'stars';

  useEffect(() => {
    const node = mount.current;
    if (!node || skin.visual?.engine === 'none') return;
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
      const spreadX = particles === 'nodes' ? 96 : particles === 'pixels' ? 118 : 110;
      const spreadY = particles === 'code' ? 86 : 70;
      positions[ix] = (Math.random() - 0.5) * spreadX;
      positions[ix + 1] = (Math.random() - 0.5) * spreadY;
      positions[ix + 2] = (Math.random() - 0.5) * 70;
      const c = particles === 'pixels' && i % 5 === 0 ? new THREE.Color('#ffdf00') : particles === 'pixels' && i % 3 === 0 ? new THREE.Color('#008080') : particles === 'embers' && i % 4 === 0 ? new THREE.Color('#ff9b45') : i % 3 === 0 ? accent : fg;
      colors[ix] = c.r; colors[ix + 1] = c.g; colors[ix + 2] = c.b;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const particleSize = particles === 'code' ? 0.55 : particles === 'sparkles' ? 1.15 : particles === 'motes' ? 0.75 : particles === 'pixels' ? 0.68 : 0.9;
    const material = new THREE.PointsMaterial({ size: particleSize, vertexColors: true, transparent: true, opacity: 0.25 + intensity * 0.38, blending: THREE.AdditiveBlending });
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
      if (preset === 'code-rain' || preset === 'embers' || preset === 'desktop-grid' || particles === 'code' || particles === 'embers' || particles === 'motes' || particles === 'pixels') {
        for (let i = 0; i < density; i++) {
          const drift = particles === 'pixels' || preset === 'desktop-grid' ? 0.004 : particles === 'embers' || preset === 'embers' ? 0.018 : particles === 'motes' ? 0.008 : -0.028;
          const y = arr.getY(i) + drift * speed;
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
  }, [skin.id, pulse, particles]);

  const hudLabels: Record<string, [string, string, string]> = {
    minimal: ['skin', skin.id, 'ready'],
    soft: ['focus', 'warmth', 'steady'],
    tactical: ['signal', 'brief', 'execute'],
    playful: ['spark', 'learn', 'level up'],
    compass: ['north', 'quest', 'reward'],
    taskbar: ['start', 'skins.md', 'online'],
  };
  const labels = hud === 'none' ? null : hudLabels[hud] ?? hudLabels.minimal;

  return <div ref={mount} className={`visual-stage visual-hud-${hud}`}>
    {labels && <div className="visual-hud" aria-hidden="true">
      <span>{labels[0]}</span><strong>{labels[1]}</strong><span>{labels[2]}</span>
    </div>}
  </div>;
}
