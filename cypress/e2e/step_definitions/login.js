import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("/");

  cy.get("#root > div > div.login_logo").should("be.visible");
  cy.get("#root > div > div.login_logo").should("contain.text", "Swag Labs");
});

When("I enter valid username", () => {
  cy.get("#user-name").type("standard_user");
});

Then("I enter valid password", () => {
  cy.get("#password").type("secret_sauce");
});

Then("I click login button", () => {
  cy.get("#login-button").click();
});

Then("I am on the products page", () => {
  cy.location("pathname").should("equal", "/inventory.html");
  cy.get("#header_container > div.header_secondary_container > span").should(
    "be.visible"
  );
  cy.get("#header_container > div.header_secondary_container > span").should(
    "contain.text",
    "Products"
  );
});

When("I enter invalid username", () => {
  cy.get("#user-name").type("wrong_user");
});

Then("I enter invalid password", () => {
  cy.get("#password").type("wrong_password");
});

Then("I get error message", () => {
  cy.location("pathname").should("equal", "/");

  cy.get(
    "#login_button_container > div > form > div.error-message-container.error > h3"
  ).should(
    "contain.text",
    "Epic sadface: Username and password do not match any user in this service"
  );
});

When("I enter locked username", () => {
  cy.get("#user-name").type("locked_out_user");
});

Then("I get error message the user is locked out", () => {
  cy.location("pathname").should("equal", "/");

  cy.get(
    "#login_button_container > div > form > div.error-message-container.error > h3"
  ).should(
    "contain.text",
    "Epic sadface: Sorry, this user has been locked out."
  );
});
