import { Page, Locator } from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly termsCheckbox: Locator;
    readonly registerButton: Locator;
    readonly message: Locator;

    
    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.getByRole('textbox', { name: 'Name:' });
        this.emailInput = page.getByRole('textbox', { name: 'Email:' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
        this.termsCheckbox = page.getByRole('checkbox', { name: 'Accept Terms' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.message = page.locator('#message');
    }

    async goto() {
        await this.page.goto('/register.html');
    }

    async fillForm({
        name = '', 
        email = '', 
        password = '', 
        acceptTerms = false
    }: {
         name?: string; 
         email?: string; 
         password?: string; 
         acceptTerms?: boolean 
    }) { 
        if (name) await this.nameInput.fill(name);
        if (email) await this.emailInput.fill(email);
        if (password) await this.passwordInput.fill(password);
        if (acceptTerms) {
            await this.termsCheckbox.check();
        }
    }

    async submitForm() {
        await this.registerButton.click();
    }

    async getValidationMessage() {
        return await this.nameInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    }

    async getMessageText(): Promise<string | null> {
        return await this.message.textContent();
    }
}