describe("cart feature", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.reload(true);
  });

  it("can add item to the cart", () => {
    cy.visit("/");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.get("#add-to-cart-sauce-labs-backpack").should(
      "contain.text",
      "Add to cart"
    );
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#remove-sauce-labs-backpack").should("contain.text", "Remove");

    cy.get("#add-to-cart-sauce-labs-bike-light").should(
      "contain.text",
      "Add to cart"
    );
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#remove-sauce-labs-bike-light").should("contain.text", "Remove");

    cy.get("#shopping_cart_container > a > span").should("contain.text", "2");
  });

  it("can remove item from the cart", () => {
    cy.visit("/");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.get("#add-to-cart-sauce-labs-backpack").should(
      "contain.text",
      "Add to cart"
    );
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#remove-sauce-labs-backpack").should("contain.text", "Remove");
    cy.get("#remove-sauce-labs-backpack").click();

    cy.get("#add-to-cart-sauce-labs-bike-light").should(
      "contain.text",
      "Add to cart"
    );
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#remove-sauce-labs-bike-light").should("contain.text", "Remove");
    cy.get("#remove-sauce-labs-bike-light").click();
  });
});
