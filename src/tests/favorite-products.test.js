const FavoriteProducts = require("../pages/favorite-products.page");
const { login } = require("../pages/login.page");
const loginPage = require("../pages/login.page");
const productDetailsPage = require("../pages/product-details.page");

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