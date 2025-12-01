const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, browser } = require("@wdio/globals");
const Login = require('../pageobjects/login.page');

describe("User Login", () => {
    it("should register the user with invalid information", async () => {
        await Login.open();

        const userData = {
            email: `wrong@mail.com`,
            password: "WrongPass123!"
        }
        await Login.fillData(userData);
        await Login.submit();
        await Login.loginError();

    })
})

Given('the user has existing account', async () => {
    await Login.open();
});

When('the user enters the email and password incorrectly', async () => {
    const userData = {
        email: `wrong@mail.com`,
        password: "WrongPass123!"
    }
    await Login.fillData(userData);
});

When("clicks on the 'Login' button", async () => {
    await Login.submit();
});

Then("an error message should be displayed saying 'Invalid email or password'", async () => {
    await Login.loginError();
});

Then('the user should remain on the login page', async () => {
    await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/auth/login');
});