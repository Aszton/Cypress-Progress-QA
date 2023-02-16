import { loginPage } from "./selectors";

export {};
declare global {
  namespace Cypress {
    interface Chainable {
      openATSpage(): Chainable<void>;
      login(user: string, password: string): Chainable<void>;
      successLogin(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("openATSpage", () => {
  cy.visit("/");
  cy.title().should("eq", "A place to practice your automation skills!");
});

Cypress.Commands.add("login", (user, password) => {
  cy.findAndType(loginPage.inputLogin, user);
  cy.findAndType(loginPage.inputPassword, password);
});

Cypress.Commands.add("successLogin", () => {
  cy.clickButton(loginPage.buttonLogin);
  cy.url().should("include", "/account");
});
