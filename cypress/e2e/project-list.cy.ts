import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";
import { ProjectStatus } from "@api/projects.types";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      const statusLabels: { [key: string]: string } = {
        [ProjectStatus.info]: "stable",
        [ProjectStatus.warning]: "warning",
        [ProjectStatus.error]: "critical",
      };

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          // cy.wrap($el).contains(capitalize(mockProjects[index].status));
          const status = statusLabels[mockProjects[index].status];
          cy.wrap($el).contains(capitalize(status));
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });

    it('redirects to the "issues" page when clicking on a project card', () => {
      // click on first project card
      cy.get("main").find("li").first().find("a").click();
      // check that the URL has changed
      cy.url().should("include", "/dashboard/issues");
    });

    it('shows the correct issues when redirecting to the "issues" page', () => {
      // click on first project card
      // cy.get("main").find("li").first().find("a").click();
      cy.get("main").find("View issues").first().click();
      // check that the URL has changed
      cy.url().should("include", "/dashboard/issues");
      // check that the correct issues are rendered
      cy.contains("Page 1 of 8");
      // cy.get("main").find("li").should("have.length", 3);
    });
  });
});

describe("page that loads data", () => {
  it("should show the loading spinner when loading the data then hide it afterwards", () => {
    // Call API and add delay
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
      delayMs: 1000,
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");
    // check loading spinner is visible
    cy.get("#loading").should("be.visible");

    // wait for request to resolve
    cy.wait("@getProjects");
    // check loading spinner is not visible
    cy.get("#loading").should("not.exist");
    // check that all projects are rendered
    cy.get("main").find("li").should("have.length", 3);
  });

  context("Errors", () => {
    it("simulates a server error", () => {
      // setup request mock with error
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        statusCode: 404,
      }).as("getServerFailure");

      // open projects page
      cy.visit("http://localhost:3000/dashboard");

      // check error message is visible
      cy.wait("@getServerFailure").then(() => {
        cy.contains("Request failed with status code 404", {
          timeout: 10000,
        }).should("be.visible");
        cy.contains("Try again").click();
        cy.get("#loading").should("be.visible");
      });
    });
  });
});
