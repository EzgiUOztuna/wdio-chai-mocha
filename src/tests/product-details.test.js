const loginPage = require("../pageobjects/login.page");
const productDetailsPage = require("../pageobjects/product-details.page");

describe("Add Product to the Basket", () => {
    beforeEach(async () => {
        await browser.loginAsCustomer3();
        await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/account');
    });

    it("User adds a product to the basket from product detail page", async () => {
        await productDetailsPage.goToHomePage();
        await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/');
        await productDetailsPage.clickProduct();
        const oldValue = await productDetailsPage.getBasketCount();
        await productDetailsPage.clickCartButton();
        await productDetailsPage.waitForCartCountToUpdate(oldValue);
        const newValue = await productDetailsPage.getBasketCount();
        await expect(newValue).toEqual(oldValue + 1);
    });
});