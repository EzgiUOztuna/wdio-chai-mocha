const { expect, browser } = require("@wdio/globals");
const BasePage = require('../core/base-page');

class ProductDetails extends BasePage {

    async clickProduct() {
        const product = await $('[data-test^="product-"]');
        await product.waitForClickable({ timeout: 10000 });
        await product.click();
    }

    async clickCartButton() {
        const addToCartButton = await $('[data-test="add-to-cart"]');
        await addToCartButton.click();
    }

    async getBasketCount() {
        const elements = await $$('[data-test="cart-quantity"]');
        if (elements.length === 0) {
            return 0;
        } else {
            const basketCounter = elements[0];
            await basketCounter.waitForDisplayed({ timeout: 5000 });
            const count = await basketCounter.getText();
            return parseInt(count);
        }
    }

    async waitForCartCountToUpdate(oldValue) {
        await browser.waitUntil(
            async () => {
                const newValue = await this.getBasketCount();
                return newValue === oldValue + 1;
            },
            {
                timeout: 10000,
                timeoutMsg: 'Cart counter did not updated!'
            }
        );
    }
}

module.exports = new ProductDetails();