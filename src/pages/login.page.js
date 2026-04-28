const { expect } = require("@wdio/globals");
const BasePage = require('../core/base-page');

class Login extends BasePage {
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

    async login(email, password) {
        await this.open();
        await this.fillData({ email, password });
        await this.submit();
    }

    async submit() {
        await this.submitButton.click();
    }
}

module.exports = new Login();