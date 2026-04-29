const { browser, expect } = require("@wdio/globals");
const BasePage = require('../core/base-page');

class Search extends BasePage {
    get searchInput() { return $('[data-test="search-query"]'); }
    get searchSubmit() { return $('[data-test="search-submit"]'); }
    get searchResults() { return $$('h5[data-test="product-name"]'); }

    async clickSearchInput() {
        const input = await this.searchInput;
        await browser.execute((el) => el.click(), input);
    }

    async searchForProduct(productName) {
        const input = await this.searchInput;
        await browser.execute((el) => el.focus(), input);
        await input.setValue(productName);
        await browser.keys('Enter');
    }

    async submitSearchBtn() {
        await this.searchSubmit.click();
    }

    async verifyProductInResults(productName) {
        const results = await Promise.all(await this.searchResults.map(async (el) => await el.getText()));
        await expect(results).toContain(productName);
    }
}

module.exports = new Search();