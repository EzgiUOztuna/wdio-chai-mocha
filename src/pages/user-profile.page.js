const { $, expect, browser } = require("@wdio/globals");
const BasePage = require('../core/base-page');

class UserProfile extends BasePage {
    get profileButton() { return $('a[data-test="nav-profile"]'); }
    get phoneInput() { return $('[data-test="phone"]'); }
    get streetInput() { return $('[data-test="street"]'); }
    get postalCodeInput() { return $('[data-test="postal_code"]'); }
    get cityInput() { return $('[data-test="city"]'); }
    get stateInput() { return $('[data-test="state"]'); }
    get countrySelect() { return $('[data-test="country"]'); }
    get updateProfile() { return $('[data-test="update-profile-submit"]'); }
    get emailInput() { return $('[data-test="email"]'); }
    get passwordInput() { return $('[data-test="password"]'); }
    get submitButton() { return $('[data-test="login-submit"]'); }

    async profilePage() {
        await this.profileButton.waitForDisplayed();
        await this.profileButton.waitForClickable();
        await this.profileButton.click()
    }

    async navigateProfilePage() {
        await browser.url("https://practicesoftwaretesting.com/account/profile")

    }

    async waitForStableValue(element) {
        await element.waitForDisplayed();

        let previousValue;

        await browser.waitUntil(
            async () => {
                const currentValue = await element.getValue();
                const isStable = currentValue === previousValue;
                previousValue = currentValue;

                return isStable;
            },
            {
                timeout: 5000,
                interval: 300,
                timeoutMsg: 'Element value did not stabilize'
            }
        );
    }

    async waitForFormReady() {
        const inputs = [
            this.phoneInput,
            this.streetInput,
            this.postalCodeInput,
            this.cityInput,
            this.stateInput
        ];

        for (const input of inputs) {
            await this.waitForStableValue(input);
        }
    }

    async change({ phoneNumber, street, postalCode, city, state, country }) {
        await this.waitForFormReady();
        await this.phoneInput.setValue(phoneNumber);
        await this.streetInput.setValue(street);
        await this.postalCodeInput.setValue(postalCode);
        await this.cityInput.setValue(city);
        await this.stateInput.setValue(state);
    }

    async updateProfileSubmit() {
        await this.updateProfile.click();
    }
}

module.exports = new UserProfile();