const loginPage = require("../pageobjects/login.page");
const searchPage = require("../pageobjects/search.page");
const Search = require("../pageobjects/search.page");

describe("Find Product for Exact Name", () => {
    beforeEach(async () => {
        await browser.loginAsCustomer3();
        await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/account');
    });

    it("User searches for a product by its exact name", async () => {
        await searchPage.goToHomePage();
        await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/');
        await Search.clickSearchInput();
        await Search.searchForProduct('Hammer');
        await Search.submitSearchBtn();
        await Search.verifyProductInResults('Hammer');
    });
});