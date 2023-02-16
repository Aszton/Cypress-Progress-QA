import "./commands";
import "./generalCommands";
import "./pomCommands.ts";
import "./collectiveCommands";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
