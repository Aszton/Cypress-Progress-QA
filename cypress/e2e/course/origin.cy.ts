describe("origin", () => {
  it("open another website", () => {
    cy.visit("https://the-internet.herokuapp.com");
    cy.get(".heading")
      .should("be.visible")
      .and("have.text", "Welcome to the-internet");

    cy.visit("https://docs.cypress.io/examples/recipes");
    cy.get(".mainContentHeader_el1s")
      .should("be.visible")
      .and("have.text", "Recipes");

    cy.visit("https://github.com/Aszton");
    cy.get(".flex-1 > .user-following-container > .follow > .btn").should(
      "be.visible"
    );

    cy.visit("https://www.google.com/");
    cy.get("#L2AGLb > .QS5gu").should("be.visible").click();
  });
});

it("different domains", () => {
  cy.visit("https://www.dlaucznia.pl/");
  cy.get(".ne-piwik-cookies__btn-save-all").click();
  cy.contains(" Logowanie").click();
  cy.get("#user-form-login-email").type("test");
});
it.only("open new tab", () => {
  cy.visit("https://the-internet.herokuapp.com/windows");
  cy.contains("Click Here").invoke("removeAttr", "target").click();
  cy.contains("New Window").should("be.visible");
  //target="_blank"
});
