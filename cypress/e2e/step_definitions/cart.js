import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I click first item", () => {
  cy.get("#add-to-cart-sauce-labs-backpack").should(
    "contain.text",
    "Add to cart"
  );
  cy.get("#add-to-cart-sauce-labs-backpack").click();
  cy.get("#remove-sauce-labs-backpack").should("contain.text", "Remove");
});

Then("I click second item", () => {
  cy.get("#add-to-cart-sauce-labs-bike-light").should(
    "contain.text",
    "Add to cart"
  );
  cy.get("#add-to-cart-sauce-labs-bike-light").click();
  cy.get("#remove-sauce-labs-bike-light").should("contain.text", "Remove");
});

Then("The items are inserted to the cart", () => {
  cy.get("#shopping_cart_container > a > span").should("contain.text", "2");
});

Then("I remove first item", () => {
  cy.get("#remove-sauce-labs-backpack").click();
});

Then("I remove second item", () => {
  cy.get("#remove-sauce-labs-bike-light").click();
});
