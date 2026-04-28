const { browser, expect } = require("@wdio/globals");
const Page = require("../core/page");

class Search extends Page {
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
        const results = await this.searchResults;
        await expect(results).toEqual(expect.arrayContaining([expect.stringContaining(productName)]));
    }
}

module.exports = new Search();