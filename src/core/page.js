const { browser } = require('@wdio/globals');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://practicesoftwaretesting.com/${path}`)
    }

    async goToHomePage() {
        await $('[data-test="nav-home"]').click();
    }

    async address({ country, postalCode, houseNumber, street, city, state }) {
        const countrySelect = await $('[data-test="country"]');
        const postalCodeInput = await $('[data-test="postal_code"]');
        const houseNumberInput = await $('[data-test="house_number"]');
        const streetInput = await $('[data-test="street"]');
        const cityInput = await $('[data-test="city"]');
        const stateInput = await $('[data-test="state"]');

        await countrySelect.click();
        const countrySelectOption = await countrySelect.$(`option[value="${country}"]`);
        await countrySelectOption.click();
        await postalCodeInput.setValue(postalCode);
        await houseNumberInput.setValue(houseNumber);
        await streetInput.setValue(street);
        await cityInput.setValue(city);
        await stateInput.setValue(state);
    }

}
