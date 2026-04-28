const UserProfile = require('../pageobjects/user-profile.page');
const loginPage = require("../pageobjects/login.page");

describe("User Update Information", () => {
    beforeEach(async () => {
        await browser.loginAsCustomer3();
        await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/account');
    });

    it("User updates profile information successfully.", async () => {
        await UserProfile.profilePage();
        await UserProfile.navigateProfilePage();
        await UserProfile.change({
            phoneNumber: "5557414554",
            street: "Frankfurt Cd",
            postalCode: "12345",
            city: "Frankfurt",
            state: "Germany"
        });
        await UserProfile.updateProfileSubmit();

        const alertSuccessMessage = await $('.alert.alert-success');
        await expect(alertSuccessMessage).toBeDisplayed();
        await expect(alertSuccessMessage).toHaveText('Profiliniz başarıyla güncellendi!');

    })
});