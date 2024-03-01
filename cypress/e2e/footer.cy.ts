import { version } from "../../package.json";

// FOOTER
describe("Footer Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    // LINKS WORKING
    it("links are working", () => {
      // check that each link leads to the correct page
      cy.get("footer").contains("Docs").click();
      cy.url().should("eq", "http://localhost:3000/dashboard#");

      cy.get("footer").contains("API").click();
      cy.url().should("eq", "http://localhost:3000/dashboard#");

      cy.get("footer").contains("Help").click();
      cy.url().should("eq", "http://localhost:3000/dashboard#");

      cy.get("footer").contains("Community").click();
      cy.url().should("eq", "http://localhost:3000/dashboard#");
    });

    // LOGO
    it("logo is present", () => {
      cy.get("footer")
        .find('img[src="/icons/logo-small.svg"]')
        .should("be.visible");
    });

    it("version number is present", () => {
      cy.get("footer").contains(`Version: ${version}`);
    });
  });
});
