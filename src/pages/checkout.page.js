const BasePage = require('../core/base-page');
const { expect, browser } = require("@wdio/globals");

class Checkout extends BasePage {
    get proceedToPaymentButton() { return $('[data-test="proceed-3"]'); }
    get paymentSelect() { return $('[data-test="payment-method"]'); }
    get cardNumber() { return $('[data-test="credit_card_number"]'); }
    get expirationDate() { return $('[data-test="expiration_date"]'); }
    get cvv() { return $('[data-test="cvv"]'); }
    get holderName() { return $('[data-test="card_holder_name"]'); }
    get finishPayment() { return $('button[data-test="finish"]'); }

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

    async proceedToBillingAddress() {
        const proceedButton = await $('button[data-test="proceed-2"]');
        await proceedButton.waitForExist();
        await proceedButton.click();
    }

    async confirmPaymentMethod() {
        await this.proceedToPaymentButton.click();
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
}

module.exports = new Checkout();