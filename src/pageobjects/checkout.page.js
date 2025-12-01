const Page = require("./page");

class Checkout extends Page {
    get proceedBtn() { return $('[data-test="proceed-1"]'); }
    get emailInput() { return $('[data-test="email"]'); }
    get passwordInput() { return $('[data-test="password"]'); }
    get submitButton() { return $('[data-test="login-submit"]'); }
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
    get finishPayment() { return $('[data-test="finish"]'); }
    get paymentSuccess() { return $('[data-test="payment-success-message"]'); }

    async open() {
        return super.open('checkout');
    }

    async clickProceed() {
        await this.proceedBtn.click();
    }

    async login({ email, password }) {
        await browser.url("https://practicesoftwaretesting.com/checkout");
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }

    async address({ street, postalCode, city, state, country }) {
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
        await this.paymentSelect.selectByVisibleText(paymentOption);
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