import "cypress-iframe";

describe("loder", () => {
  it("loader on herokuapp", () => {
    cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1");
    cy.get("button").click();
    cy.get("#loading", { timeout: 10000 }).should(
      "have.attr",
      "style",
      "display: none;"
    );
    cy.get("#finish > h4")
      .should("be.visible")
      .and("contain.text", "Hello World!");
  });

  it("loader on globalsQA page", () => {
    cy.visit(
      "https://www.globalsqa.com/demo-site/progress-bar/#Random%20Progress%20Bar"
    );
    cy.iframe(".resp-tab-content-active > p > .demo-frame")
      .find("#downloadButton")
      .click();
    cy.iframe(".resp-tab-content-active > p > .demo-frame")
      .find("#progressbar", { timeout: 15000 })
      .should("have.attr", "aria-valuenow", "100");
  });
});
