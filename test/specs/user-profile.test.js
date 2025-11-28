const { Given, When, Then } = require("@wdio/cucumber-framework");
const UserProfile = require('../pageobjects/user-profile.page');
const { expect, browser } = require("@wdio/globals");

Given("the user is logged into their account successfully", async () => {
    await UserProfile.login({
        email: "test@mail.com",
        password: "25112025*Epam"
    });
});

When("the user clicks on the 'Profile' button", async () => {
    await UserProfile.profilePage();
});

When("navigates to the 'Profile' page", async () => {
    await UserProfile.navigateProfilePage();
    await UserProfile.phoneInput.waitForDisplayed();
});

When("changes phone number and address", async () => {
    await UserProfile.change({
        phoneNumber: "5555555554",
        street: "Atatürk Caddesi",
        postalCode: "34000",
        city: "Istanbul",
        state: "Marmara",
        country: "TR"
    });
});

When("clicks on the 'Update Profile' button", async () => {
    await UserProfile.updateProfileSubmit();
});

Then("a confirmation message should appear", async () => {
    await UserProfile.alertMessage();
});

Then("the updated information should be visible on the profile page", async () => {
    await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/account/profile');
});