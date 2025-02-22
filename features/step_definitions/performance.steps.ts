import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

When('I measure the page load time', async function(this: ICustomWorld) {
  const navigationTiming = await this.page!.evaluate(() => {
    const timing = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0].startTime,
      timeToInteractive: timing.domInteractive - timing.navigationStart
    };
  });
  this.performanceMetrics = navigationTiming;
});

Then('the page should load within {int} seconds', async function(this: ICustomWorld, seconds: number) {
  expect(this.performanceMetrics.loadTime).toBeLessThan(seconds * 1000);
});

When('I run a Lighthouse performance audit', async function(this: ICustomWorld) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'info',
    output: 'json',
    port: chrome.port,
  };
  const url = this.page!.url();
  const runnerResult = await lighthouse(url, options);
  this.lighthouseResults = runnerResult.lhr;
  await chrome.kill();
});

Then('the performance score should be above {int}', async function(this: ICustomWorld, threshold: number) {
  const score = this.lighthouseResults.categories.performance.score * 100;
  expect(score).toBeGreaterThan(threshold);
});