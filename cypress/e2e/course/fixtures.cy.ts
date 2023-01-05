import user from "../../fixtures/user.json";

describe("fixtures", () => {
  it("easier way to load values from json file", () => {
    cy.visit("https://automationteststore.com/index.php?rt=account/login");
    cy.title().should("eq", "Account Login");
    cy.get("#loginFrm_loginname")
      .should("be.visible")
      .type(user.username)
      .should("have.value", user.username);
    cy.get("#loginFrm_password")
      .should("be.visible")
      .type(user.userpassword)
      .should("have.value", user.userpassword);
    cy.get('[title="Login"]').click();
    cy.url().should("include", "account/account");
  });
});
