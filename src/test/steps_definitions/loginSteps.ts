
import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "playwright";

let browser: Browser;
let page: Page;

Given('user is on the login page1', { timeout: 60 * 1000 }, async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
});

When('user enters1 {string} and {string}', { timeout: 60 * 1000 }, async function (email, password) {
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
});

Then('user clicks on the login button1', { timeout: 60 * 1000 }, async function () {
  await page.click('input[value="Login"]');
});

Then('verifies login is successful1', { timeout: 60 * 1000 }, async function () {
  const myAccountLink = await page.isVisible('a:has-text("My Account")');
  await page.close();
  await browser.close();
});
