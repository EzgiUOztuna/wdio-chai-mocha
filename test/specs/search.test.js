const { Given, When, Then } = require("@wdio/cucumber-framework");
const Search = require("../pageobjects/search.page");

Given("the user is on the home page", async () => {
    await Search.open();
});

When("the user clicks on the Search bar", async () => {
    await Search.clickSearchInput();
});

When("enters the exact product name into the search bar", async () => {
    await Search.searchForProduct('Hammer');
});

When("clicks on the 'Search' button", async () => {
    await Search.submitSearchBtn();
});

Then("the product matching the exact name should be displayed in the search results", async () => {
    await Search.verifyProductInResults('Hammer');
});