import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';

Then('I should see the following table headers:', async function(this: ICustomWorld, dataTable) {
  const expectedHeaders = dataTable.raw()[0];
  const headers = await this.page!.locator('.tsc_table_charts thead th').allTextContents();
  
  for (const header of expectedHeaders) {
    expect(headers).toContain(header);
  }
});

Then('the table should have more than {int} rows', async function(this: ICustomWorld, minRows: number) {
  const rowCount = await this.page!.locator('.tsc_table_charts tbody tr').count();
  expect(rowCount).toBeGreaterThan(minRows);
});

Then('the first row should contain rank {string}', async function(this: ICustomWorld, rank: string) {
  const firstRow = await this.page!.locator('.tsc_table_charts tbody tr').first();
  const cells = await firstRow.locator('td').allTextContents();
  expect(cells).toContain(rank);
});