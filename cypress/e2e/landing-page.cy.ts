import mockHomeData from "../fixtures/home.json";

describe("Landing Page", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/content-page/home", {
      fixture: "home.json",
    }).as("getHomeData");

    // open projects page
    cy.visit("http://localhost:3000/");

    // wait for request to resolve
    cy.wait("@getHomeData");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("should display the hero data", () => {
      // get the first section on the page
      cy.get("section").first().as("heroSection");
      // check the title
      cy.get("@heroSection")
        .find("h1")
        .should("have.text", mockHomeData.sections[0].title);
      // check the subtitle
      cy.get("@heroSection")
        .find("h2")
        .should("have.text", mockHomeData.sections[0].subtitle);
      // check The base URL for the images is the same as for the API requests
      cy.get("@heroSection")
        .find("img")
        .should("have.attr", "src", mockHomeData.sections[0].image!.src);
    });
  });
});
