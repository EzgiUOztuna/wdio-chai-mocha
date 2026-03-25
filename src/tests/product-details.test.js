const productDetailsPage = require("../pageobjects/product-details.page");

describe("Add Product to the Basket", () => {
    it("User adds a product to the basket from product detail page", async () => {
        await productDetailsPage.goToHomePage();
        await productDetailsPage.clickProduct();
        await productDetailsPage.clickCartButton();
        await productDetailsPage.successMessage();
        await productDetailsPage.counter();
    });
});