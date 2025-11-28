const { Given, When, Then } = require("@wdio/cucumber-framework");
const Checkout = require("../../features/pageobjects/checkout.page");
const Login = require("../../features/pageobjects/login.page");

Given("the user is in the cart", async () => {
    await Checkout.open();
});

When("the user clicks on the 'Proceed to checkout'", async () => {
    await Checkout.clickProceed();
});

When("signs in again to proceed", async () => {
    await Checkout.login({
        email: "test@mail.com",
        password: "25112025*Epam"
    });
});

When("enters the billing address details", async () => {
    const userData = {
        street: "Atatürk Caddesi",
        city: "Istanbul",
        state: "Marmara",
        country: "Turkey",
        postalCode: "34000"
    }
    await Checkout.address(userData);
});


When("clicks again 'Proceed to checkout' button", async () => {
    await Checkout.submit3();
});

When("selects a payment option under 'Choose your payment method' section", async () => {
    await Checkout.paymentSelection({ paymentOption: 'Kredi Kartı' });
});

When("enters valid information for payment", async () => {
    const cardData = {
        creditCardNumber: '4111 1111 1111 1111',
        expiration: '12/30',
        CVV: '123',
        cardHolderName: 'John Doe'
    };
    await Checkout.creditCardInfo(cardData);
});

When("clicks on the 'Confirm' button", async () => {
    await Checkout.submitPayment();
});

Then("a confirmation message should be displayed on the screen as a 'Payment was successful'", async () => {
    await Checkout.successMessage();
})