import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Page, Browser, chromium } from '@playwright/test';

export interface ICustomWorld extends World {
  browser?: Browser;
  page?: Page;
  accessibilityResults?: any;
  formFields?: any[];
  apiResponse?: any;
  postData?: any;
  performanceMetrics?: any;
  lighthouseResults?: any;
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }

  async cleanup() {
    await this.page?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);