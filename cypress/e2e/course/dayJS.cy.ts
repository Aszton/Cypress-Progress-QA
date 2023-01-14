import "cypress-iframe";

const dayjs = require("dayjs");
const todaysDate = dayjs().format("MM/DD/YYYY");
const todaysDatePlus10D = dayjs().add(10, "d").format("MM/DD/YYYY");
const todaysDatePlus10DPlus1M = dayjs()
  .add(10, "d")
  .add(1, "M")
  .format("DD MMM YYYY");
const todaysDatePlus10DPlus1MPlus1Y = dayjs()
  .add(10, "d")
  .add(1, "M")
  .add(1, "y")
  .format("DD MMM YYYY");

describe("Day JS Library", () => {
  it("jquery website", () => {
    cy.visit("https://jqueryui.com/datepicker/");
    cy.iframe()
      .find("#datepicker")
      .type(todaysDate)
      .should("have.value", todaysDate)
      .clear()
      .type(todaysDatePlus10D)
      .should("have.value", todaysDatePlus10D);
    cy.iframe().click();
  });

  it("demoqa website", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#dateOfBirthInput")
      .invoke("val", todaysDatePlus10DPlus1M)
      .should("have.value", todaysDatePlus10DPlus1M)
      .invoke("val", todaysDatePlus10DPlus1MPlus1Y)
      .should("have.value", todaysDatePlus10DPlus1MPlus1Y);
  });
});
