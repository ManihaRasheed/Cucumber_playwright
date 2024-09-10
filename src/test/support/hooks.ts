

import { Before, After } from "@cucumber/cucumber";
import { chromium, Page, Browser, BrowserContext } from "playwright";
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000);

let browser: Browser;
let context: BrowserContext;
let page: Page;


Before({ timeout: 10 * 1000 },async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
});

After({ timeout: 10 * 1000 },async function () {
  if (page) {
    await page.close();
  }
  if (context) {
    await context.close();
  }
  if (browser) {
    await browser.close();
  }
});

// Make the `page` object available to your steps
export { page };





/*import { Given, When, Then,Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep } from "@cucumber/cucumber";

Before(async () => {
    console.log("Before")
  });

After(async () => {
 console.log("After")
  });

BeforeAll(async () => {
  console.log("BeforeAll")
  });

AfterAll(async () => {
    console.log("AfterAll")
});

BeforeStep(async () => {
    console.log("BeforeStep")
});

AfterStep(async () => {
    console.log("AfterStep")
});

*/