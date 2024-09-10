

import { Page } from 'playwright';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  }

  async fillLoginForm(email: string, password: string) {
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
  }

  async clickLogin() {
    await this.page.click('input[value="Login"]');
  }

  async isLoginSuccessful() {
    return await this.page.isVisible('a:has-text("My Account")');
  }
}
