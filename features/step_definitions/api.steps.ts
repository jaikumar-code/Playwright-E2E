import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';

Given('I make a GET request to {string}', async function(this: ICustomWorld, endpoint: string) {
  const response = await this.page!.request.get(`${process.env.API_BASE_URL}${endpoint}`);
  this.apiResponse = response;
});

Then('the response status code should be {int}', async function(this: ICustomWorld, statusCode: number) {
  expect(this.apiResponse.status()).toBe(statusCode);
});

Then('the response should be in JSON format', async function(this: ICustomWorld) {
  const contentType = this.apiResponse.headers()['content-type'];
  expect(contentType).toContain('application/json');
});

Given('I have the following post data:', async function(this: ICustomWorld, dataTable) {
  this.postData = dataTable.hashes()[0];
});

When('I make a POST request to {string}', async function(this: ICustomWorld, endpoint: string) {
  const response = await this.page!.request.post(`${process.env.API_BASE_URL}${endpoint}`, {
    data: this.postData
  });
  this.apiResponse = response;
});