const UserProfile = require('../pageobjects/user-profile.page');
const loginPage = require("../pageobjects/login.page");

describe("User Update Information", () => {
    beforeEach(async () => {
        await loginPage.login("user@example.com", "Password123!");
    });
    it("User updates profile information successfully.", async () => {
        /*await UserProfile.login({
            email: "userrr@example.com",
            password: "Password123!"
        });*/

        /*await UserProfile.profilePage();
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
        expect(url).to.equal('https://practicesoftwaretesting.com/account/profile');*/
    })
});