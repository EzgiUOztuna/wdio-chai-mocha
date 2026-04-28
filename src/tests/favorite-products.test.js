const FavoriteProducts = require("../pageobjects/favorite-products.page");
const { login } = require("../pageobjects/login.page");
const loginPage = require("../pageobjects/login.page");
const productDetailsPage = require("../pageobjects/product-details.page");

describe("Successful Adding Product to the Favorites", () => {
    beforeEach(async () => {
        await browser.loginAsCustomer3();
        await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/account');
    });

    it("User successfully adds a product to the Favorites list", async () => {
        await productDetailsPage.goToHomePage();
        await productDetailsPage.clickProduct();
        await FavoriteProducts.clickFavoriteButton();

        const successToast = await $('#toast-container');
        await expect(successToast).toBeDisplayed();

        await FavoriteProducts.removeFavorites();
    });
});