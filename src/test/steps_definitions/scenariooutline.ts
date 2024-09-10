

import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "playwright";

let browser: Browser;
let page: Page;

Given('user is on the registration page4', { timeout: 60 * 1000 }, async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
});

When('user provides4 {string}, {string}, {string}, {string}, {string}', { timeout: 60 * 1000 }, async function (firstname, lastname, email, telephone, password) {
  await page.fill('input[name="firstname"]', firstname);
  await page.fill('input[name="lastname"]', lastname);
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="telephone"]', telephone);
  await page.fill('input[name="password"]', password);
  await page.fill('input[name="confirm"]', password);
  await page.check('input[name="agree"]');
});

Then('user clicks on the continue button4', { timeout: 60 * 1000 }, async function () {
  await page.click('input[value="Continue"]');
});

Then('verifies registration is successful4', { timeout: 60 * 1000 }, async function () {
  const registrationSuccess = await page.isVisible('h1:has-text("Your Account Has Been Created!")');
  await page.close();
  await browser.close();
});


Given('user is on the login page4', { timeout: 60 * 1000 }, async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
});

When('user enters4 {string} and {string}', { timeout: 60 * 1000 }, async function (email, password) {
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
});

Then('user clicks on the login button4', { timeout: 60 * 1000 }, async function () {
  await page.click('input[value="Login"]');
});

Then('verifies login is successful4', { timeout: 60 * 1000 }, async function () {
  const myAccountLink = await page.isVisible('a:has-text("My Account")');
  await page.close();
  await browser.close();
});
