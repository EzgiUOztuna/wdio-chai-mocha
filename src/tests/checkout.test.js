const checkoutPage = require("../pages/checkout.page");
const loginPage = require("../pages/login.page");
const { login } = require("../pages/login.page");
const productDetailsPage = require("../pages/product-details.page");

describe("Complete Purchase Successfully", () => {
    beforeEach(async () => {
        await browser.loginAsCustomer3();
        await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/account');
    });

    it("User completes checkout with valid payment details", async () => {
        const userData = {
            country: "TR",
            postalCode: "34000",
            houseNumber: "42",
            street: "Atatürk Caddesi",
            city: "Istanbul",
            state: "Marmara",
        };

        const cardData = {
            creditCardNumber: '4111-1111-1111-1111',
            expiration: '12/2030',
            CVV: '123',
            cardHolderName: 'John Doe'
        };

        const paymentSuccess = await $('[data-test="payment-success-message"]');

        await productDetailsPage.goToHomePage();
        await productDetailsPage.clickProduct();
        await productDetailsPage.clickCartButton();

        await checkoutPage.goToCheckout();
        await checkoutPage.clickProceed();
        await checkoutPage.proceedToBillingAddress();
        await checkoutPage.address(userData);
        await checkoutPage.confirmPaymentMethod();
        await checkoutPage.paymentSelection({ paymentOption: 'credit-card' });
        await checkoutPage.creditCardInfo(cardData);
        await checkoutPage.submitPayment();
        await expect(paymentSuccess).toBeDisplayed();
        await expect(paymentSuccess).toHaveText('Payment was successful');
    });
});