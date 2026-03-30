const { expect } = require("@wdio/globals");
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

    async removeFavorites() {
        const fullnameButton = await $('[data-test="nav-menu"]');
        await fullnameButton.click();

        const dropdownMenu = await $('.dropdown-menu.show');
        await expect(dropdownMenu).toBeDisplayed();

        const favoriteButton = await $('[data-test="nav-my-favorites"]');
        await favoriteButton.click();

        await browser.url('https://practicesoftwaretesting.com/account/favorites');

        const deleteButton = await $('[data-test="delete"]');
        await deleteButton.click();
        await expect(deleteButton).not.toExist();
    }
}

module.exports = new FavoriteProducts();

