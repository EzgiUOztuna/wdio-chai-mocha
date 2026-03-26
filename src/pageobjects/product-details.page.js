const { expect, browser } = require("@wdio/globals");
const Page = require("./page");

class ProductDetails extends Page {
    //get successToast() { return $('#toast-container'); }

    async goToHomePage() {
        await $('[data-test="nav-home"]').click();
        await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/');
    }

    async clickProduct() {
        const product = await $('[data-test^="product-"]');
        await product.waitForClickable({ timeout: 10000 });
        await product.click();
    }

    async clickCartButton() {
        const addToCartButton = await $('[data-test="add-to-cart"]');
        await addToCartButton.click();
    }

    async successMessage() {
        const successToast = $('#toast-container');
        await expect(successToast).toBeDisplayed();
        await expect(successToast).toHaveText('Product added to shopping cart.');
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

    async counter() {
        const oldValue = await this.getBasketCount();
        await this.clickCartButton();
        await this.successMessage();

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

        const newValue = await this.getBasketCount();
        await expect(newValue).toEqual(oldValue + 1);
    }
}

module.exports = new ProductDetails();