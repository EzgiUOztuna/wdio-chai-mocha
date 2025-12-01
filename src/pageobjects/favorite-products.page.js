const Page = require("./page");

class FavoriteProducts extends Page {
    get addFavorites() { return $('[data-test="add-to-favorites"]'); }
    get errorToast() { return $('div[role="alert"][class*="toast-message"]'); }

    async open() {
        return super.open('product/01KB2FH1GEK977ZNZMDS0WXR9Z');
    }

    async clickFavoriteButton() {
        await this.addFavorites.click();
    }

    async errorMessage(expectedMessage) {
        await expect(this.errorToast).toBeDisplayed();
        await expect(this.errorToast).toHaveText(expectedMessage);
    }
}

module.exports = new FavoriteProducts();

