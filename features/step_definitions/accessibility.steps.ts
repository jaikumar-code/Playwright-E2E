import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import AxeBuilder from '@axe-core/playwright';

When('I analyze the page for accessibility issues', async function(this: ICustomWorld) {
  const results = await new AxeBuilder({ page: this.page! }).analyze();
  this.accessibilityResults = results;
});

Then('there should be no critical accessibility violations', async function(this: ICustomWorld) {
  const criticalViolations = this.accessibilityResults.violations.filter(v => v.impact === 'critical');
  expect(criticalViolations.length).toBe(0);
});

Then('there should be no serious accessibility violations', async function(this: ICustomWorld) {
  const seriousViolations = this.accessibilityResults.violations.filter(v => v.impact === 'serious');
  expect(seriousViolations.length).toBe(0);
});

When('I check form fields accessibility', async function(this: ICustomWorld) {
  const formFields = await this.page!.$$('input, select, textarea');
  this.formFields = formFields;
});

Then('all form fields should have proper labels', async function(this: ICustomWorld) {
  for (const field of this.formFields) {
    const ariaLabel = await field.getAttribute('aria-label');
    const labelId = await field.getAttribute('aria-labelledby');
    const hasLabel = ariaLabel || labelId;
    expect(hasLabel).toBeTruthy();
  }
});