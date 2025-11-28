const { Given, When, Then } = require("@wdio/cucumber-framework");
const ProductDetails = require("../../features/pageobjects/product-details.page");

Given("the user is on the product details page", async () => {
    await ProductDetails.open();
});

When("the user clicks on the 'Add to cart' button", async () => {
    await ProductDetails.clickCartButton();
});

Then("the product should be added to the basket", async () => {
    await ProductDetails.successMessage();
});

Then("the basket counter should increase by one", async () => {
    await ProductDetails.counter();
});

Then("confirmation message should be displayed saying 'Product added to shopping cart'", async () => {
    await ProductDetails.successMessage();
});