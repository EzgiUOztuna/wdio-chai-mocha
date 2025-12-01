const { $, expect, browser } = require("@wdio/globals");
const Page = require("./page");

class UserProfile extends Page {
    get profileButton() { return $('a[data-test="nav-profile"]'); }
    get phoneInput() { return $('[data-test="phone"]'); }
    get streetInput() { return $('[data-test="street"]'); }
    get postalCodeInput() { return $('[data-test="postal_code"]'); }
    get cityInput() { return $('[data-test="city"]'); }
    get stateInput() { return $('[data-test="state"]'); }
    get countrySelect() { return $('[data-test="country"]'); }
    get updateProfile() { return $('[data-test="update-profile-submit"]'); }
    get alertSuccessMessage() { return $('.alert.alert-success'); }
    get emailInput() { return $('[data-test="email"]'); }
    get passwordInput() { return $('[data-test="password"]'); }
    get submitButton() { return $('[data-test="login-submit"]'); }

    async login({ email, password }) {
        await browser.url("https://practicesoftwaretesting.com/auth/login");
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }

    async profilePage() {
        await this.profileButton.waitForDisplayed();
        await this.profileButton.waitForClickable();
        await this.profileButton.click()
    }

    async navigateProfilePage() {
        await browser.url("https://practicesoftwaretesting.com/account/profile")
    }

    async change({ phoneNumber, street, postalCode, city, state, country }) {
        await this.phoneInput.waitForDisplayed();
        await this.phoneInput.setValue(phoneNumber);
        await this.streetInput.setValue(street);
        await this.postalCodeInput.setValue(postalCode);
        await this.cityInput.setValue(city);
        await this.stateInput.setValue(state);
        await this.countrySelect.setValue(country);
    }

    async updateProfileSubmit() {
        await this.updateProfile.click();
    }

    async alertMessage() {
        await expect(this.alertSuccessMessage).toBeDisplayed();
        await expect(this.alertSuccessMessage).toHaveText('Profiliniz başarıyla güncellendi!');
    }
}

module.exports = new UserProfile();