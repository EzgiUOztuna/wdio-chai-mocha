const { expect } = require("@wdio/globals");
const Page = require('../core/page');

class Login extends Page {
    get emailInput() { return $('[data-test="email"]'); }
    get passwordInput() { return $('[data-test="password"]'); }
    get submitButton() { return $('[data-test="login-submit"]'); }

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