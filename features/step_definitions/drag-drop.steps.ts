import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';

When('I drag the source element to the target element', async function(this: ICustomWorld) {
  const sourceElement = this.page!.locator('#draggable');
  const targetElement = this.page!.locator('#droppable');
  
  const sourceBox = await sourceElement.boundingBox();
  const targetBox = await targetElement.boundingBox();
  
  if (sourceBox && targetBox) {
    await this.page!.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
    await this.page!.mouse.down();
    await this.page!.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2);
    await this.page!.mouse.up();
  }
});

Then('the target element should display {string}', async function(this: ICustomWorld, text: string) {
  await expect(this.page!.locator('#droppable')).toHaveText(text);
});