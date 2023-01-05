describe("fixtures topic", () => {
  beforeEach(function () {
    cy.fixture("user").then((user) => {
      this.user = user;
    });
  });
  it("use fixtures", function () {
    cy.visit("https://automationteststore.com/index.php?rt=account/login");
    cy.title().should("eq", "Account Login");
    cy.get("#loginFrm_loginname")
      .should("be.visible")
      .type(this.user.username)
      .should("have.value", this.user.username);
    cy.get("#loginFrm_password")
      .should("be.visible")
      .type(this.user.userpassword)
      .should("have.value", this.user.userpassword);
    cy.get('[title="Login"]').click();
    cy.url().should("include", "account/account");
  });
});
