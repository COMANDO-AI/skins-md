import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const outDir = 'artifacts/visual-section-qa';
await fs.mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 960 }, deviceScaleFactor: 1 });
const errors = [];
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('pageerror', (err) => errors.push(err.message));
await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle' });

const skins = [
  ['Cozy Study Companion', '01-cozy-hud-soft.png'],
  ['Pokémon Trainer', '02-pokemon-hud-playful.png'],
  ['Anime Tutor', '03-anime-hud-playful.png'],
  ['Fantasy Quest Mentor', '04-fantasy-hud-compass.png'],
];
const data = [];
for (const [name, file] of skins) {
  await page.getByLabel('Mini skin gallery').getByRole('button', { name: new RegExp(name, 'i') }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${outDir}/${file}`, fullPage: true });
  data.push(await page.evaluate(() => ({
    skin: document.body.dataset.skin,
    visualHud: document.body.dataset.visualHud,
    visualParticles: document.body.dataset.visualParticles,
    textReveal: document.body.dataset.textReveal,
    transitions: document.body.dataset.transitions,
    parallax: document.body.dataset.parallax,
    hudVisible: !!document.querySelector('.visual-hud'),
    accent: getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(),
  })));
}
const results = { url: page.url(), data, consoleErrors: errors };
await fs.writeFile(`${outDir}/results.json`, JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
await browser.close();
