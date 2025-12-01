const FavoriteProducts = require("../pageobjects/favorite-products.page");
const { expect } = require('chai');

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
    });
});