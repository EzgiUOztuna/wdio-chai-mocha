const Search = require("../pageobjects/search.page");

describe("Find Product for Exact Name", () => {
    it("User searches for a product by its exact name", async () => {
        await Search.open();
        await Search.clickSearchInput();
        await Search.searchForProduct('Hammer');
        await Search.submitSearchBtn();
        await Search.verifyProductInResults('Hammer');
    });
});