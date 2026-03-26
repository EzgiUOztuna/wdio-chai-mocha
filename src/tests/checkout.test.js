const checkoutPage = require("../pageobjects/checkout.page");
const loginPage = require("../pageobjects/login.page");
const { login } = require("../pageobjects/login.page");
const productDetailsPage = require("../pageobjects/product-details.page");

describe("Complete Purchase Successfully", () => {
    beforeEach(async () => {
        await loginPage.login("user@example.com", "Password123!");
    });

    it("User completes checkout with valid payment details", async () => {
        const userData = {
            street: "Atatürk Caddesi",
            city: "Istanbul",
            state: "Marmara",
            country: "Turkey",
            postalCode: "34000"
        };

        const cardData = {
            creditCardNumber: '4111-1111-1111-1111',
            expiration: '12/2030',
            CVV: '123',
            cardHolderName: 'John Doe'
        };

        await productDetailsPage.goToHomePage();
        await productDetailsPage.clickProduct();
        await productDetailsPage.clickCartButton();

        await checkoutPage.goToCheckout();
        await checkoutPage.clickProceed();
        await checkoutPage.continueGuest({
            email: "test@mail.com",
            firstName: "John",
            lastName: "Doe"
        });
        await checkoutPage.clickProceed2();
        await checkoutPage.address(userData);
        await checkoutPage.submit3();
        await checkoutPage.paymentSelection({ paymentOption: 'credit-card' });
        await checkoutPage.creditCardInfo(cardData);
        await checkoutPage.submitPayment();
        await checkoutPage.successMessage();
    });
});