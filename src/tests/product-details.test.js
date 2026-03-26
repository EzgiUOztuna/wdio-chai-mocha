const loginPage = require("../pageobjects/login.page");
const productDetailsPage = require("../pageobjects/product-details.page");

describe("Add Product to the Basket", () => {
    beforeEach(async () => {
        await loginPage.login("user@example.com", "Password123!");
    });

    it("User adds a product to the basket from product detail page", async () => {
        await productDetailsPage.goToHomePage();
        await productDetailsPage.clickProduct();
        await productDetailsPage.counter();
    });
});