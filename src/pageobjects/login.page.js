const { expect } = require("@wdio/globals");
const Page = require("./page");

class Login extends Page {
    get emailInput() { return $('[data-test="email"]'); }
    get passwordInput() { return $('[data-test="password"]'); }
    get submitButton() { return $('[data-test="login-submit"]'); }
    get errorMessage() { return $('[data-test="login-error"]'); }

    async open() {
        return super.open('auth/login');
    }

    async fillData({ email, password }) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
    }

    async submit() {
        await this.submitButton.click();
    }

    async loginError() {
        await expect(this.errorMessage).toBeDisplayed();
        await expect(this.errorMessage).toHaveText('Invalid email or password');
    }
}

module.exports = new Login();