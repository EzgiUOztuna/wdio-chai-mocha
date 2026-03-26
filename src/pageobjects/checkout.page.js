const Page = require("./page");
const { expect, browser } = require("@wdio/globals");

class Checkout extends Page {
    get streetInput() { return $('[data-test="street"]'); }
    get cityInput() { return $('[data-test="city"]'); }
    get stateInput() { return $('[data-test="state"]'); }
    get countrySelect() { return $('[data-test="country"]'); }
    get postalCodeInput() { return $('[data-test="postal_code"]'); }
    get proceedBtn3() { return $('[data-test="proceed-3"]'); }
    get paymentSelect() { return $('[data-test="payment-method"]'); }
    get cardNumber() { return $('[data-test="credit_card_number"]'); }
    get expirationDate() { return $('[data-test="expiration_date"]'); }
    get cvv() { return $('[data-test="cvv"]'); }
    get holderName() { return $('[data-test="card_holder_name"]'); }
    get finishPayment() { return $('button[data-test="finish"]'); }
    get paymentSuccess() { return $('[data-test="payment-success-message"]'); }

    async goToCheckout() {
        const cartButton = await $('.nav-item a[data-test="nav-cart"]');
        await cartButton.click();
        await browser.url("https://practicesoftwaretesting.com/checkout");
    }

    async clickProceed() {
        const proceedButton = await $('button.btn.btn-success');
        await proceedButton.waitForExist();
        await proceedButton.click();
    }

    async continueGuest({ email, firstName, lastName }) {
        await expect(browser).toHaveUrl("https://practicesoftwaretesting.com/checkout");

        await $('a[href="#guest-tab"]').click();

        const emailInput = await $('[data-test="guest-email"]');
        await emailInput.setValue(email);

        const firstNameInput = await $('[data-test="guest-first-name"]');
        await firstNameInput.setValue(firstName);

        const lastNameInput = await $('[data-test="guest-last-name"]');
        await lastNameInput.setValue(lastName);

        const submitButton = await $('[data-test="guest-submit"]');
        await submitButton.click();
    }

    async clickProceed2() {
        const proceedButton = await $('button[data-test="proceed-2-guest"]');
        await proceedButton.waitForExist();
        await proceedButton.click();
    }

    async address({ street, city, state, country, postalCode }) {
        await this.streetInput.setValue(street);
        await this.cityInput.setValue(city);
        await this.stateInput.setValue(state);
        await this.countrySelect.setValue(country);
        await this.postalCodeInput.setValue(postalCode);
    }

    async submit3() {
        await this.proceedBtn3.click();
    }

    async paymentSelection({ paymentOption }) {
        await this.paymentSelect.selectByAttribute('value', 'credit-card');
    }

    async creditCardInfo({ creditCardNumber, expiration, CVV, cardHolderName }) {
        await this.cardNumber.setValue(creditCardNumber);
        await this.expirationDate.setValue(expiration);
        await this.cvv.setValue(CVV);
        await this.holderName.setValue(cardHolderName);
    }

    async submitPayment() {
        await this.finishPayment.click();
    }

    async successMessage() {
        await expect(this.paymentSuccess).toBeDisplayed();
        await expect(this.paymentSuccess).toHaveText('Payment was successful');
    }
}

module.exports = new Checkout();