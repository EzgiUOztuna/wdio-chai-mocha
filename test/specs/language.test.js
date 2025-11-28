const { Given, When, Then } = require("@wdio/cucumber-framework");
const Language = require("../pageobjects/language.page");

Given("the user is on the home page", async () => {
    await Language.open();
});

When("the user clicks on the world icon or 'EN' word", async () => {
    await Language.openDropdown();
});

When("selects 'TR' from the language dropdown", async () => {
    await Language.selectTr();
});

Then("entire page should be displayed in Turkish", async () => {
    await Language.verifyTurkish();
});