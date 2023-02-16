import user from "../../fixtures/user.json";
import { products, sucess } from "../../support/input";
import {
  general,
  productDetails,
  basket,
  checkout,
} from "../../support/selectors";

describe("Buy a product", () => {
  beforeEach(() => {
    cy.openATSandLogin(user.username, user.userpassword);
  });
  it("buy a product Skinsheen Bronzer Stick", () => {
    cy.clickButton(general.buttonHomePage);
    cy.clickByText(products.skinSheen);
    cy.clickButton(productDetails.buttonAddToChart);
    cy.url().should("include", "checkout/cart");
    cy.clickButton(basket.buttonCheckout);
    cy.url().should("contain", "checkout/confirm");
    cy.clickButton(checkout.buttonConfirmOrder);
    cy.checkTextOfTheElement(checkout.textSuccessOrder, sucess.text);
  });
});
