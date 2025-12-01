const RegistrationPage = require('../pageobjects/signup.page');
const { expect } = require('chai');

describe("User Registration", () => {
    it("should register the user with valid information", async () => {
        await RegistrationPage.open();

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
        await RegistrationPage.submit();

        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://practicesoftwaretesting.com/auth/login', { timeout: 5000 }
        );

        const url = await browser.getUrl();
        expect(url).to.equal('https://practicesoftwaretesting.com/auth/login');
    });
});