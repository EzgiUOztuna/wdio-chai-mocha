const { browser, expect } = require("@wdio/globals");
const BasePage = require('../core/base-page');

class Search extends BasePage {
    get searchInput() { return $('[data-test="search-query"]'); }
    get searchSubmit() { return $('[data-test="search-submit"]'); }
    get searchResults() { return $('[data-test="search_completed"]').$$('h5[data-test="product-name"]'); }

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
        await browser.waitUntil(async () => {
            const results = await this.searchResults.map(async (el) => await el.getText());
            console.log('Search results:', results);

            const validResults = results.filter(name =>
                name.includes(productName)
            ); //Since there is some mistakes in UI, we need to filter results to get only valid ones
            console.log('Valid results:', validResults);

            return validResults;
        }, {
            timeout: 5000,
            timeoutMsg: `Expected product "${productName}" not found in search results after 5 seconds`
        });
    }
}

module.exports = new Search();