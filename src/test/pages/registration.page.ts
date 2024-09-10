

import { Page } from 'playwright';

export class RegistrationPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  }

  async fillRegistrationForm(firstname: string, lastname: string, email: string, telephone: string, password: string) {
    await this.page.fill('input[name="firstname"]', firstname);
    await this.page.fill('input[name="lastname"]', lastname);
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="telephone"]', telephone);
    await this.page.fill('input[name="password"]', password);
    await this.page.fill('input[name="confirm"]', password);
    await this.page.check('input[name="agree"]');
  }

  async clickContinue() {
    await this.page.click('input[value="Continue"]');
  }

  async isRegistrationSuccessful() {
    return await this.page.isVisible('h1:has-text("Your Account Has Been Created!")');
  }
}
