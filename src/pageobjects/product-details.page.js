const { expect, browser } = require("@wdio/globals");
const Page = require("./page");

class ProductDetails extends Page {
    //get successToast() { return $('#toast-container'); }

    async goToHomePage() {
        await browser.url('https://practicesoftwaretesting.com/');
    }

    async clickProduct() {
        const container = await $('app-overview');
        const productLink = await container.$$('div.container a');
        await productLink[2].click();

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

    async counter() {
        const basketCounter = await $('[data-test="cart-quantity"]');
        const oldValue = parseInt(await basketCounter.getText());
        const newValue = parseInt(await basketCounter.getText());

        await expect(newValue).toEqual(oldValue + 1);
    }
}

module.exports = new ProductDetails();