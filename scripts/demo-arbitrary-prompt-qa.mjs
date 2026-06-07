import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const outDir = 'artifacts/demo-arbitrary-prompt-qa';
await fs.mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const errors = [];
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('pageerror', (err) => errors.push(err.message));

await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle' });
await page.getByRole('button', { name: /Clear/i }).click();
await page.locator('.skin-grid').getByRole('button', { name: /Gothic Librarian/i }).click();
await page.getByPlaceholder(/no key needed/i).fill('im libra, read my horoscope for the week');
await page.locator('.composer > button').click();
await page.getByRole('heading', { name: /Archive reading|Demo reading/i }).waitFor({ timeout: 5000 });
await page.waitForFunction(() => /no-key demo mode/i.test(document.querySelector('.message.assistant:last-of-type')?.textContent ?? ''), null, { timeout: 5000 });
await page.screenshot({ path: `${outDir}/01-gothic-horoscope-demo.png`, fullPage: true });
const text = await page.locator('.message.assistant').last().innerText();
const result = {
  headingFound: /Archive reading|Demo reading/.test(text),
  noGenericDemoResponse: !/Demo response/.test(text),
  mentionsNoKeyDemo: /no-key demo mode/i.test(text),
  promptEchoed: /libra/i.test(text),
  consoleErrors: errors,
};
await fs.writeFile(`${outDir}/results.json`, JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
await browser.close();
