const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, browser } = require("@wdio/globals");
const RegistrationPage = require('../pageobjects/signup.page');

Given('the user is on the registration page', async () => {
    await RegistrationPage.open();
});

When('the user enters valid registration information', async () => {
    const userData = {
        firstName: "Ezgi",
        lastName: "Oztuna",
        birthDate: "1996-03-28",
        street: "Atatürk Caddesi",
        postalCode: "34000",
        city: "Istanbul",
        state: "Marmara",
        country: "Turkey",
        phoneNumber: "5555555555",
        email: `ezgi_${Date.now()}@mail.com`,
        password: "21112025*Epam"
    }
    await RegistrationPage.fillForm(userData);
});

When('clicks on the Register button', async () => {
    await RegistrationPage.submit();
});

Then('the user should be redirected to the login page', async () => {
    await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/auth/login');
})