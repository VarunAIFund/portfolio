#!/usr/bin/env node
/**
 * Portfolio Screenshot Script
 * Captures all key sections in both light and dark mode at 1440px wide.
 *
 * Usage:
 *   node scripts/screenshot-portfolio.js
 *   node scripts/screenshot-portfolio.js --url http://localhost:3001
 *
 * Output: .claude/screenshots/{N}/  (auto-increments each run)
 * Requires: playwright  (npm i -g playwright  or  npx playwright install chromium)
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE_URL = process.argv.find(a => a.startsWith('--url='))?.split('=')[1] ?? 'http://localhost:3000';
const SCRIPT_DIR = path.dirname(__filename);
const ROOT = path.resolve(SCRIPT_DIR, '..');
const SCREENSHOTS_DIR = path.join(ROOT, '.claude', 'screenshots');
fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
const existingNums = fs.readdirSync(SCREENSHOTS_DIR)
  .map(n => parseInt(n, 10))
  .filter(n => !isNaN(n));
const nextNum = existingNums.length > 0 ? Math.max(...existingNums) + 1 : 1;
const OUT_DIR = path.join(SCREENSHOTS_DIR, String(nextNum));

const SECTIONS = [
  { name: '1-hero',       anchor: '#hero' },
  { name: '2-about',      anchor: '#about' },
  { name: '3-experience', anchor: '#experience' },
  { name: '4-projects',   anchor: '#projects' },
  { name: '5-skills',     anchor: '#skills' },
  { name: '6-contact',    anchor: '#contact' },
];

async function forceTheme(page, mode) {
  await page.evaluate((m) => {
    document.documentElement.classList.toggle('dark', m === 'dark');
    try { localStorage.setItem('theme', m); } catch (_) {}
  }, mode);
  await page.waitForTimeout(350);
}

async function scrollTo(page, anchor) {
  if (anchor === '#hero') {
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  } else {
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, anchor);
  }
  await page.waitForTimeout(500);
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log(`\nPortfolio screenshots`);
  console.log(`  URL:    ${BASE_URL}`);
  console.log(`  Output: ${OUT_DIR}\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(1200); // let animations settle

  for (const mode of ['light', 'dark']) {
    console.log(`[${mode.toUpperCase()} MODE]`);
    await forceTheme(page, mode);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);

    // Section-by-section viewport shots
    for (const section of SECTIONS) {
      await scrollTo(page, section.anchor);
      const file = path.join(OUT_DIR, `${mode}-${section.name}.png`);
      await page.screenshot({ path: file, type: 'png' });
      console.log(`  ✓ ${mode}-${section.name}.png`);
    }

    // Full-page composite
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    const fullFile = path.join(OUT_DIR, `${mode}-FULL-PAGE.png`);
    await page.screenshot({ path: fullFile, fullPage: true, type: 'png' });
    console.log(`  ✓ ${mode}-FULL-PAGE.png`);

    console.log('');
  }

  await browser.close();

  const total = SECTIONS.length * 2 + 2;
  console.log(`Done — ${total} screenshots saved to:\n  ${OUT_DIR}\n`);
})().catch(err => {
  console.error('\nScript failed:', err.message);
  console.error('Make sure the dev server is running at', BASE_URL);
  process.exit(1);
});
