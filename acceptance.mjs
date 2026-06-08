import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
const errors = [];
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('pageerror', (err) => errors.push(err.message));

await page.route('https://openrouter.ai/api/v1/chat/completions', async (route) => {
  const chunks = [
    'data: {"choices":[{"delta":{"content":"# Streaming OK\\n\\nHere is `markdown` and code:\\n\\n```js\\nconsole.log(\\"skin\\")\\n```"}}]}\n\n',
    'data: [DONE]\n\n'
  ];
  await route.fulfill({
    status: 200,
    contentType: 'text/event-stream',
    body: chunks.join('')
  });
});

await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'artifacts/01-initial.png', fullPage: true });

const firstVisitPrompt = await page.getByText('Fastest path:').isVisible();
const demoReady = await page.getByText('Demo mode · no API key required').isVisible();
const skinBeforeHover = await page.evaluate(() => document.body.dataset.skin);
await page.locator('.skin-grid').getByRole('button', { name: /Terminal Oracle/i }).hover();
await page.waitForTimeout(350);
const skinDuringHover = await page.evaluate(() => document.body.dataset.skin);
const hoverDoesNotPreviewApply = skinBeforeHover === skinDuringHover;
await page.mouse.move(900, 200);
await page.getByRole('button', { name: /OpenRouter/i }).click();
await page.getByPlaceholder('sk-or-v1-...').fill('***');
await page.getByRole('button', { name: 'Save' }).click();
await page.reload({ waitUntil: 'networkidle' });
const keyPersisted = await page.getByText('Saved in localStorage. Never sent to a SKINS.MD server.').isVisible();

const beforeSendLabel = await page.locator('.composer > button').innerText();
await page.locator('.skin-grid').getByRole('button', { name: /Terminal Oracle/i }).click();
await page.waitForTimeout(200);
const afterSendLabel = await page.locator('.composer > button').innerText();
const terminalBg = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--accent').trim());
await page.screenshot({ path: 'artifacts/02-terminal.png', fullPage: true });

await page.locator('textarea').fill('render markdown code');
await page.locator('.composer > button').click();
await page.waitForSelector('pre code.hljs', { timeout: 5000 });
const markdownRendered = await page.locator('h1', { hasText: 'Streaming OK' }).count().catch(() => 0);
const codeHighlighted = await page.locator('pre code.hljs').count();

await page.reload({ waitUntil: 'networkidle' });
const persistedConversation = await page.getByText('Streaming OK').isVisible();

const downloadPromise = page.waitForEvent('download');
await page.getByRole('button', { name: 'Export JSON' }).click();
const download = await downloadPromise;
const exportName = download.suggestedFilename();

const validSkinPath = path.resolve('SKIN.template.md');
await page.setInputFiles('input[type=file]', validSkinPath);
await page.waitForTimeout(500);
const importedApplied = await page.getByText('Your Skin Name').first().isVisible();

const invalidPath = path.resolve('artifacts/invalid.SKIN.md');
await page.evaluate(() => window.scrollTo(0, 0));
await page.setInputFiles('input[type=file]', invalidPath);
await page.waitForTimeout(300);
const invalidError = await page.getByText(/Invalid SKIN.md:.*Section 2/).isVisible();

const visualCanvas = await page.locator('.visual-stage canvas').count();
await page.screenshot({ path: 'artifacts/03-imported.png', fullPage: true });

const results = {
  firstVisitPrompt,
  demoReady,
  hoverDoesNotPreviewApply,
  keyPersisted,
  beforeSendLabel,
  afterSendLabel,
  terminalBg,
  skinTransforms: beforeSendLabel !== afterSendLabel && afterSendLabel === 'EXEC' && terminalBg === '#39ff88',
  markdownRendered: markdownRendered > 0,
  codeHighlighted: codeHighlighted > 0,
  persistedConversation,
  exportName,
  importedApplied,
  invalidError,
  visualCanvas: visualCanvas > 0,
  consoleErrors: errors,
};
console.log(JSON.stringify(results, null, 2));
await browser.close();
