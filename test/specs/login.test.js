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
        await Login.loginError();

        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://practicesoftwaretesting.com/auth/login'
        );
        const url = await browser.getUrl();
        expect(url).to.equal('https://practicesoftwaretesting.com/auth/login');
    })
});