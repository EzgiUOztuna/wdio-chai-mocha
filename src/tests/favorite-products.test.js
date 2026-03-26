const FavoriteProducts = require("../pageobjects/favorite-products.page");
const { expect } = require('chai');
const { login } = require("../pageobjects/login.page");
const loginPage = require("../pageobjects/login.page");
const productDetailsPage = require("../pageobjects/product-details.page");

describe("Unsuccessful Adding Product to the Favorites", () => {
    beforeEach(async () => {
        await loginPage.login("user@example.com", "Password123!");
    });

    it("User fails to add a product to the Favorites list", async () => {
        await productDetailsPage.goToHomePage();
        await productDetailsPage.clickProduct();

        await FavoriteProducts.clickFavoriteButton();
        await FavoriteProducts.errorMessage('Unauthorized, can not add product to your favorite list.');
    });
});