import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in", () => {
  cy.visit("/");

  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
});

When("I click logout button", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
});

Then("I am redirected to the login page", () => {
  cy.get("#root > div > div.login_logo").should("be.visible");
  cy.get("#root > div > div.login_logo").should("contain.text", "Swag Labs");
  cy.location("pathname").should("equal", "/");
});
