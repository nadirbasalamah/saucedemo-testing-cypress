describe("logout feature", () => {
  it("logout successfully", () => {
    cy.visit("/");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();

    cy.get("#root > div > div.login_logo").should("be.visible");
    cy.get("#root > div > div.login_logo").should("contain.text", "Swag Labs");
    cy.location("pathname").should("equal", "/");
  });
});
