const Language = require("../pages/language.page");
const loginPage = require("../pages/login.page");

describe("Switch from English to Turkish", () => {
    beforeEach(async () => {
        await browser.loginAsCustomer3();
        await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/account');
    });

    it("User changes the site language to Turkish", async () => {
        await Language.goToHomePage();
        await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/');
        await Language.openDropdown();
        await Language.selectTr();
        await Language.verifyTurkish();
    });
});