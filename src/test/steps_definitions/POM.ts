import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "playwright";
import { RegistrationPage } from '..//pages/registration.page';
import { LoginPage } from '../pages/login.page';

let browser: Browser;
let page: Page;
let registrationPage: RegistrationPage;
let loginPage: LoginPage;

Given('user is on the registration page', { timeout: 60 * 1000 }, async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  registrationPage = new RegistrationPage(page);
  await registrationPage.goto();
});

When('user provides {string}, {string}, {string}, {string}, {string}', { timeout: 60 * 1000 }, async function (firstname, lastname, email, telephone, password) {
  await registrationPage.fillRegistrationForm(firstname, lastname, email, telephone, password);
});

Then('user clicks on the continue button', { timeout: 60 * 1000 }, async function () {
  await registrationPage.clickContinue();
});

Then('verifies registration is successful', { timeout: 60 * 1000 }, async function () {
  const success = await registrationPage.isRegistrationSuccessful();
  console.log('Registration Success:', success);
  await page.close();
  await browser.close();
});

Given('user is on the login page', { timeout: 60 * 1000 }, async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('user enters {string} and {string}', { timeout: 60 * 1000 }, async function (email, password) {
  await loginPage.fillLoginForm(email, password);
});

Then('user clicks on the login button', { timeout: 60 * 1000 }, async function () {
  await loginPage.clickLogin();
});

Then('verifies login is successful', { timeout: 60 * 1000 }, async function () {
  const success = await loginPage.isLoginSuccessful();
  console.log('Login Success:', success);
  await page.close();
  await browser.close();
});
