const ProductDetails = require("../../features/pageobjects/product-details.page");

describe("Add Product to the Basket", () => {
    it("User adds a product to the basket from product detail page", async () => {
        await ProductDetails.open();
        await ProductDetails.clickCartButton();
        await ProductDetails.successMessage();
        await ProductDetails.counter();
        await ProductDetails.successMessage();
    });
});