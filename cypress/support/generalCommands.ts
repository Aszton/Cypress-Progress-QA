export {};
declare global {
  namespace Cypress {
    interface Chainable {
      findAndType(selector: string, value: string): Chainable<void>;
      clickButton(selector: string): Chainable<void>;
      clickByText(text: string): Chainable<void>;
      checkTextOfTheElement(selector: string, text: string): Chainable<void>;
      login(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("findAndType", (selector, value) => {
  cy.get(selector).should("be.visible").type(value).should("have.value", value);
});

Cypress.Commands.add("clickButton", (selector) => {
  cy.get(selector).should("be.visible").click();
});

Cypress.Commands.add("clickByText", (text) => {
  cy.contains(text).click({ force: true });
});

Cypress.Commands.add("checkTextOfTheElement", (selector, text) => {
  cy.get(selector).should("be.visible").and("have.text", text);
});
