const Language = require("../pageobjects/language.page");
const loginPage = require("../pageobjects/login.page");

describe("Switch from English to Turkish", () => {
    beforeEach(async () => {
        await loginPage.login("customer2@practicesoftwaretesting.com", "welcome01");
    });

    it("User changes the site language to Turkish", async () => {
        await Language.goToHomePage();
        await Language.openDropdown();
        await Language.selectTr();
        await Language.verifyTurkish();
    });
});