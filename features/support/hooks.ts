import { Before, After, Status } from '@cucumber/cucumber';
import { ICustomWorld } from './custom-world';
import AllureReporter from 'allure-cucumberjs';

Before(async function(this: ICustomWorld) {
  await this.init();
});

After(async function(this: ICustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    // Take screenshot if scenario fails
    const screenshot = await this.page?.screenshot({
      path: `./allure-results/screenshot-${Date.now()}.png`,
      fullPage: true
    });
    
    // Attach screenshot to Allure report
    if (screenshot) {
      await this.attach(screenshot, 'image/png');
    }
  }
  
  await this.cleanup();
});