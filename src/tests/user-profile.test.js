const UserProfile = require('../pageobjects/user-profile.page');
const loginPage = require("../pageobjects/login.page");

describe("User Update Information", () => {
    beforeEach(async () => {
        await loginPage.login("customer2@practicesoftwaretesting.com", "welcome01");
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
        await UserProfile.alertMessage();

    })
});