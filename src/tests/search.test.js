const loginPage = require("../pageobjects/login.page");
const searchPage = require("../pageobjects/search.page");
const Search = require("../pageobjects/search.page");

describe("Find Product for Exact Name", () => {
    beforeEach(async () => {
        await loginPage.login("user@example.com", "Password123!");
    });

    it("User searches for a product by its exact name", async () => {
        await searchPage.goToHomePage();
        await Search.clickSearchInput();
        await Search.searchForProduct('Hammer');
        await Search.submitSearchBtn();
        await Search.verifyProductInResults('Hammer');
    });
});