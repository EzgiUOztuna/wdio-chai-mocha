const { Given, When, Then } = require("@wdio/cucumber-framework");
const FavoriteProducts = require("../pageobjects/favorite-products.page");
const { expect, browser } = require("@wdio/globals");

describe("Unsuccessful Adding Product to the Favorites", () => {
    it("User fails to add a product to the Favorites list", async () => {
        await FavoriteProducts.open();
        await FavoriteProducts.clickFavoriteButton();
        await FavoriteProducts.errorMessage('Unauthorized, can not add product to your favorite list.');

        await browser.waitUntil(
            async () => (browser.getUrl()) === "https://practicesoftwaretesting.com/product/01KB2FH1GEK977ZNZMDS0WXR9Z"
        );
        const url = await browser.getUrl();
        expect(url).to.equal('https://practicesoftwaretesting.com/product/01KB2FH1GEK977ZNZMDS0WXR9Z');
    })
})

Given("the user is on the product details page", async () => {
    await FavoriteProducts.open();
});

When("the user clicks on the 'Add to favorites' button", async () => {
    await FavoriteProducts.clickFavoriteButton();
});

Then("an error message should be displayed saying {string}", async (message) => {
    await FavoriteProducts.errorMessage(message);
});

Then("no changes should occur on the page", async () => {
    await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/product/01KB2FH1GEK977ZNZMDS0WXR9Z');
});