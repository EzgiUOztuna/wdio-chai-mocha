const FavoriteProducts = require("../pageobjects/favorite-products.page");
const { login } = require("../pageobjects/login.page");
const loginPage = require("../pageobjects/login.page");
const productDetailsPage = require("../pageobjects/product-details.page");

describe("Successful Adding Product to the Favorites", () => {
    beforeEach(async () => {
        await loginPage.login("customer2@practicesoftwaretesting.com", "welcome01");
    });

    it("User successfully adds a product to the Favorites list", async () => {
        await productDetailsPage.goToHomePage();
        await productDetailsPage.clickProduct();

        await FavoriteProducts.clickFavoriteButton();
        await FavoriteProducts.successMessage('Product added to your favorites list.');
        await FavoriteProducts.removeFavorites();
    });
});