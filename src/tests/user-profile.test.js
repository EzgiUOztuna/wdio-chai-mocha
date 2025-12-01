const UserProfile = require('../pageobjects/user-profile.page');
const { expect } = require('chai');

describe("User Update Information", () => {
    it("User updates profile information successfully.", async () => {
        await UserProfile.login({
            email: "test@mail.com",
            password: "25112025*Epam"
        });

        await UserProfile.profilePage();
        await UserProfile.navigateProfilePage();
        await UserProfile.phoneInput.waitForDisplayed();
        await UserProfile.change({
            phoneNumber: "5555555554",
            street: "Atatürk Caddesi",
            postalCode: "34000",
            city: "Istanbul",
            state: "Marmara",
            country: "TR"
        });
        await UserProfile.updateProfileSubmit();
        await UserProfile.alertMessage();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://practicesoftwaretesting.com/account/profile', { timeout: 10000 }
        );
        const url = await browser.getUrl();
        expect(url).to.equal('https://practicesoftwaretesting.com/account/profile');
    })
});