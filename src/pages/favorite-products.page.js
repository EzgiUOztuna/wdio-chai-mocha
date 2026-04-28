const { expect } = require("@wdio/globals");
const BasePage = require('../core/base-page');

class FavoriteProducts extends BasePage {
    get addFavorites() { return $('[data-test="add-to-favorites"]'); }

    async clickFavoriteButton() {
        await this.addFavorites.click();
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

