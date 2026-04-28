const BasePage = require('../core/base-page');

class Language extends BasePage {
    get selectLanguage() { return $('[data-test="language-select"]'); }
    get turkishLanguageOption() { return $('[data-test="lang-tr"]'); }
    get homeButton() { return $('[data-test="nav-home"]'); }
    get categoriesButton() { return $('[data-test="nav-categories"]'); }

    async openDropdown() {
        await this.selectLanguage.waitForDisplayed();
        await this.selectLanguage.click();
    }

    async selectTr() {
        await this.turkishLanguageOption.waitForClickable();
        await this.turkishLanguageOption.click();
    }

    async verifyTurkish() {
        await expect(this.homeButton).toHaveText(expect.stringContaining('Anasayfa'));
        await expect(this.categoriesButton).toHaveText(expect.stringContaining('Kategoriler'));
    }
}

module.exports = new Language();