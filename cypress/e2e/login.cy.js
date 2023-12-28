describe("login feature", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("login successfully with valid credentials", () => {
    cy.get("#root > div > div.login_logo").should("be.visible");
    cy.get("#root > div > div.login_logo").should("contain.text", "Swag Labs");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.location("pathname").should("equal", "/inventory.html");
    cy.get("#header_container > div.header_secondary_container > span").should(
      "be.visible"
    );
    cy.get("#header_container > div.header_secondary_container > span").should(
      "contain.text",
      "Products"
    );
  });

  it("login failed with wrong credentials", () => {
    cy.get("#root > div > div.login_logo").should("be.visible");
    cy.get("#root > div > div.login_logo").should("contain.text", "Swag Labs");

    cy.get("#user-name").type("wrong_user");
    cy.get("#password").type("wrong_password");
    cy.get("#login-button").click();

    cy.location("pathname").should("equal", "/");

    cy.get(
      "#login_button_container > div > form > div.error-message-container.error > h3"
    ).should(
      "contain.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("login failed with locked user", () => {
    cy.get("#root > div > div.login_logo").should("be.visible");
    cy.get("#root > div > div.login_logo").should("contain.text", "Swag Labs");

    cy.get("#user-name").type("locked_out_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.location("pathname").should("equal", "/");

    cy.get(
      "#login_button_container > div > form > div.error-message-container.error > h3"
    ).should(
      "contain.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
