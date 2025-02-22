import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';

Given('I am on the test automation practice website', async function(this: ICustomWorld) {
  const page = this.page!;
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForLoadState('networkidle');
});

When('I fill in the name field with {string}', async function(this: ICustomWorld, name: string) {
  await this.page!.locator('#name').fill(name);
});

When('I fill in the email field with {string}', async function(this: ICustomWorld, email: string) {
  await this.page!.locator('#email').fill(email);
});

When('I fill in the phone field with {string}', async function(this: ICustomWorld, phone: string) {
  await this.page!.locator('#phone').fill(phone);
});

When('I fill in the address field with {string}', async function(this: ICustomWorld, address: string) {
  await this.page!.locator('#textarea').fill(address);
});

When('I select {string} as gender', async function(this: ICustomWorld, gender: string) {
  const selector = gender.toLowerCase() === 'male' ? '#male' : '#female';
  await this.page!.locator(selector).check();
});

When('I select {string} and {string} as preferred days', async function(this: ICustomWorld, day1: string, day2: string) {
  await this.page!.locator(`#${day1.toLowerCase()}`).check();
  await this.page!.locator(`#${day2.toLowerCase()}`).check();
});

When('I select {string} from the country dropdown', async function(this: ICustomWorld, country: string) {
  await this.page!.selectOption('#country', country);
});

When('I select {string} and {string} from the colors dropdown', async function(this: ICustomWorld, color1: string, color2: string) {
  await this.page!.selectOption('#colors', [color1.toLowerCase(), color2.toLowerCase()]);
});

Then('the form should be filled with the correct data', async function(this: ICustomWorld) {
  const nameValue = await this.page!.locator('#name').inputValue();
  expect(nameValue).toBe('John Doe');
  
  const emailValue = await this.page!.locator('#email').inputValue();
  expect(emailValue).toBe('john.doe@example.com');
});

When('I click the {string} button', async function(this: ICustomWorld, buttonText: string) {
  await this.page!.locator(`button:has-text("${buttonText}")`).click();
});

Then('I should see an alert with message {string}', async function(this: ICustomWorld, message: string) {
  this.page!.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe(message);
    await dialog.accept();
  });
});

Then('I should be able to accept the alert', async function() {
  // Dialog is handled in the previous step
});

When('I accept the confirm dialog', async function(this: ICustomWorld) {
  this.page!.on('dialog', async dialog => {
    await dialog.accept();
  });
});

When('I dismiss the confirm dialog', async function(this: ICustomWorld) {
  this.page!.on('dialog', async dialog => {
    await dialog.dismiss();
  });
});

Then('I should see the message {string}', async function(this: ICustomWorld, message: string) {
  await expect(this.page!.locator('#demo')).toHaveText(message);
});