const Page = require("./page");

class FavoriteProducts extends Page {
    get addFavorites() { return $('[data-test="add-to-favorites"]'); }
    get successToast() { return $('#toast-container'); }

    async clickFavoriteButton() {
        await this.addFavorites.click();
    }

    async successMessage(expectedMessage) {
        await expect(this.successToast).toBeDisplayed();
        await expect(this.successToast).toHaveText(expectedMessage);
    }
}

module.exports = new FavoriteProducts();

