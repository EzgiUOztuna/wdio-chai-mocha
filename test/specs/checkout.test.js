const Checkout = require("../../features/pageobjects/checkout.page");

describe("Complete Purchase Successfully", () => {
    it("User completes checkout with valid payment details", async () => {
        await Checkout.open();
        await Checkout.clickProceed();
        await Checkout.login({
            email: "test@mail.com",
            password: "25112025*Epam"
        });

        const userData = {
            street: "Atatürk Caddesi",
            city: "Istanbul",
            state: "Marmara",
            country: "Turkey",
            postalCode: "34000"
        }
        await Checkout.address(userData);
        await Checkout.submit3();
        await Checkout.paymentSelection({ paymentOption: 'Kredi Kartı' });

        const cardData = {
            creditCardNumber: '4111 1111 1111 1111',
            expiration: '12/30',
            CVV: '123',
            cardHolderName: 'John Doe'
        };
        await Checkout.creditCardInfo(cardData);
        await Checkout.submitPayment();
        await Checkout.successMessage();
    });
});