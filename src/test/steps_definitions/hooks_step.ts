

import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../support/hooks"; 

Given('user is on the registration page2', { timeout: 60 * 1000 }, async function () {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
});

When('user provides2 {string}, {string}, {string}, {string}, {string}', { timeout: 60 * 1000 }, async function (firstname, lastname, email, telephone, password) {
  await page.fill('input[name="firstname"]', firstname);
  await page.fill('input[name="lastname"]', lastname);
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="telephone"]', telephone);
  await page.fill('input[name="password"]', password);
  await page.fill('input[name="confirm"]', password);
  await page.check('input[name="agree"]');
});

Then('user clicks on the continue button2', { timeout: 60 * 1000 }, async function () {
  await page.click('input[value="Continue"]');
});

Then('verifies registration is successful2', { timeout: 60 * 1000 }, async function () {
  const registrationSuccess = await page.isVisible('h1:has-text("Your Account Has Been Created!")');
  if (!registrationSuccess) {
    throw new Error("Registration was not successful.");
  }
});

Given('user is on the login page2', { timeout: 60 * 1000 }, async function () {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
});

When('user enters2 {string} and {string}', { timeout: 60 * 1000 }, async function (email, password) {
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
});

Then('user clicks on the login button2', { timeout: 60 * 1000 }, async function () {
  await page.click('input[value="Login"]');
});

Then('verifies login is successful2', { timeout: 60 * 1000 }, async function () {
  const myAccountLink = await page.isVisible('a:has-text("My Account")');
  if (!myAccountLink) {
    throw new Error("Login was not successful.");
  }
});


