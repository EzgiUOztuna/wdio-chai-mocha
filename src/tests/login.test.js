const Login = require('../pageobjects/login.page');
const { expect } = require('chai');

describe("User Login", () => {
    it("should register the user with invalid information", async () => {
        await Login.open();

        const userData = {
            email: `wrong@mail.com`,
            password: "WrongPass123!"
        }
        await Login.fillData(userData);
        await Login.submit();

        const errorMessage = await $('[data-test="login-error"]');
        await errorMessage.waitForDisplayed();
        expect(await errorMessage.isDisplayed()).to.be.true;
        expect(await errorMessage.getText()).to.equal('Invalid email or password');

        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://practicesoftwaretesting.com/auth/login'
        );
        const url = await browser.getUrl();
        expect(url).to.equal('https://practicesoftwaretesting.com/auth/login');
    })

});