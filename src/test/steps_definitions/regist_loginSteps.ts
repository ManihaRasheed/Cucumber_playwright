import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "playwright";

let browser: Browser;
let page: Page;

Given('provide valid url', function () {
           console.log("Given")
         });

When('provide valid username and password', function () {
            console.log("When")
         });

Then('click on login button', function () {
            console.log("Then")
         });

Then('varify login is success', function () {
            console.log("And")
          });



Given('I am on the registration page', async function () {
            browser = await chromium.launch({ headless: false }); 
            page = await browser.newPage();
            await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
          });
          
When('I provide valid registration details', async function () {
            await page.fill('input[name="firstname"]', 'hani'); 
            await page.fill('input[name="lastname"]', 'Ali'); 
            await page.fill('input[name="email"]', 'haniaali12@gmail.com'); 
            await page.fill('input[name="telephone"]', '1234567890'); 
            await page.fill('input[name="password"]', 'ali20ahmad'); 
            await page.fill('input[name="confirm"]', 'ali20ahmad'); 
            await page.check('input[name="agree"]'); 
          });

Then('I click on the continue button', async function () {
            await page.click('input[value="Continue"]');
          });
          
Then('I verify registration is successful', async function () {
            const registrationSuccess = await page.isVisible('h1:has-text("Your Account Has Been Created!")');
            await page.close();
            await browser.close();
          });





Given('I am on the login page', async function () {
   browser = await chromium.launch({ headless: false }); 
            page = await browser.newPage();
            await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
          });
          
When('I enter valid username and password', async function () {
            await page.fill('input[name="email"]', 'haniaali12@gmail.com'); 
            await page.fill('input[name="password"]', 'ali20ahmad'); 
          });
          
Then('I click on the login button', async function () {
            await page.click('input[value="Login"]');
          });
          
Then('I verify login is successful', async function () {
            const myAccountLink = await page.isVisible('a:has-text("My Account")');
            await page.close();
            await browser.close();
          });
