import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const outDir = 'artifacts/live-visual-qa';
await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 960 }, deviceScaleFactor: 1 });
const errors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text());
});
page.on('pageerror', (err) => errors.push(err.message));

await page.goto('https://skins-md.vercel.app', { waitUntil: 'networkidle' });
await page.screenshot({ path: `${outDir}/01-live-minimal-demo-onboarding.png`, fullPage: true });

const skins = [
  ['Cozy Study Companion', '02-live-cozy-study-companion.png'],
  ['Executive Operator', '03-live-executive-operator.png'],
  ['Anime Tutor', '04-live-anime-tutor.png'],
  ['Fantasy Quest Mentor', '05-live-fantasy-quest-mentor.png'],
];

for (const [name, file] of skins) {
  await page.locator('.skin-grid').getByRole('button', { name: new RegExp(name, 'i') }).click();
  await page.waitForTimeout(450);
  await page.screenshot({ path: `${outDir}/${file}`, fullPage: true });
}

await page.getByRole('button', { name: /Give me a 20 minute study plan/i }).click();
await page.waitForTimeout(1200);
await page.screenshot({ path: `${outDir}/06-live-demo-streaming-response.png`, fullPage: true });

const results = {
  url: page.url(),
  title: await page.title(),
  connectVisible: await page.getByText('CONNECT').isVisible(),
  demoVisible: await page.getByText('Demo mode · no API key required').isVisible(),
  beforeAfterVisible: await page.getByLabel('Before and after skin comparison').isVisible(),
  miniGalleryVisible: await page.getByLabel('Mini skin gallery').isVisible(),
  consumerSkinsVisible: Object.fromEntries(await Promise.all(skins.map(async ([name]) => [name, await page.getByRole('button', { name: new RegExp(name, 'i') }).first().isVisible()]))),
  streamedMarkdownVisible: await page.getByRole('heading', { name: /Cozy study plan|Demo response|Quest log|Executive brief|Tutor arc/i }).first().isVisible(),
  consoleErrors: errors,
  screenshots: [
    '01-live-minimal-demo-onboarding.png',
    ...skins.map(([, file]) => file),
    '06-live-demo-streaming-response.png',
  ],
};

await fs.writeFile(`${outDir}/results.json`, JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
await browser.close();
