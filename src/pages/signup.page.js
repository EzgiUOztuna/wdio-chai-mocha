const BasePage = require('../core/base-page');

class RegistrationPage extends BasePage {
    get firstNameInput() { return $('[data-test="first-name"]'); }
    get lastNameInput() { return $('[data-test="last-name"]'); }
    get dobInput() { return $('[data-test="dob"]'); }
    get phoneInput() { return $('[data-test="phone"]'); }
    get emailInput() { return $('[data-test="email"]'); }
    get passwordInput() { return $('[data-test="password"]'); }
    get submitButton() { return $('[data-test="register-submit"]'); }

    async open() {
        return super.open('auth/register');
    }

    async personalInfo({ firstName, lastName, birthDate, phoneNumber, email, password }) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.dobInput.setValue(birthDate);
        await this.phoneInput.setValue(phoneNumber);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
    }

    async fillForm(data) {
        await this.personalInfo(data);
        await this.address(data);
    }

    async submit() {
        await this.submitButton.click();
    }
}

module.exports = new RegistrationPage();