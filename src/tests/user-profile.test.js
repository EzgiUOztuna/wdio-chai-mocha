const UserProfile = require('../pageobjects/user-profile.page');
const loginPage = require("../pageobjects/login.page");

describe("User Update Information", () => {
    beforeEach(async () => {
        await loginPage.login("customer2@practicesoftwaretesting.com", "welcome01");
    });
    it("User updates profile information successfully.", async () => {
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

    })
});