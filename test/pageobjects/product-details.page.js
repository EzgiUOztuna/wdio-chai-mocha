const { expect } = require("@wdio/globals");
const Page = require("./page");

class ProductDetails extends Page {
    get addToCart() { return $('[data-test="add-to-cart"]'); }
    get successToast() { return $('#toast-container'); }
    get basketCounter() { return $('[data-test="cart-quantity"]'); }

    async open() {
        return super.open('product/01KB2FH1GCJ9KQM30564ZVSM97');
    }

    async clickCartButton() {
        await this.addToCart.click();
    }

    async successMessage() {
        await expect(this.successToast).toBeDisplayed();
        await expect(this.successToast).toHaveText('Product added to shopping cart.');
    }

    async counter() {
        const oldValue = parseInt(await this.basketCounter.getText());
        const newValue = parseInt(await this.basketCounter.getText());

        await expect(newValue).toEqual(oldValue + 1);
    }
}

module.exports = new ProductDetails();