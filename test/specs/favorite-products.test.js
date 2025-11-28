const { Given, When, Then } = require("@wdio/cucumber-framework");
const FavoriteProducts = require("../pageobjects/favorite-products.page");
const { expect, browser } = require("@wdio/globals");

Given("the user is on the product details page", async () => {
    await FavoriteProducts.open();
});

When("the user clicks on the 'Add to favorites' button", async () => {
    await FavoriteProducts.clickFavoriteButton();
});

Then("an error message should be displayed saying {string}", async (message) => {
    await FavoriteProducts.errorMessage(message);
});

Then("no changes should occur on the page", async () => {
    await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/product/01KB2FH1GEK977ZNZMDS0WXR9Z');
});