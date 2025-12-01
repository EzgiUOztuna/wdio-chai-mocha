const Language = require("../pageobjects/language.page");

describe("Switch from English to Turkish", () => {
    it("User changes the site language to Turkish", async () => {
        await Language.open();
        await Language.openDropdown();
        await Language.selectTr();
        await Language.verifyTurkish();
    });
});