/// <reference types="cypress" />

before(() => {
  cy.visit("https://demo.applitools.com/hackathon.html");
});

describe("Validate Labels", () => {
  it("Login Form", () => {
    cy.get(".auth-header").should("contain", "Login Form");
  });

  it("Username", () => {
    cy.get(":nth-child(1) > label").should("contain", "Username");
  });

  it("Enter your username", () => {
    cy.get("#username").should(
      "have.attr",
      "placeholder",
      "Enter your username"
    );
  });

  it("Password", () => {
    cy.get("form > :nth-child(2) > label").should("contain", "Password");
  });

  it("Enter your password", () => {
    cy.get("#password").should(
      "have.attr",
      "placeholder",
      "Enter your password"
    );
  });

  it("Log In", () => {
    cy.get("#log-in").should("contain", "Log In");
  });

  it("Remember Me", () => {
    cy.get(".form-check-label").should("contain", "Remember Me");
  });
});

describe("Validate Images", () => {
  it("Logo", () => {
    cy.get(".logo-w > a > img").should("be.visible");
  });

  it("User icon is visible", () => {
    cy.get(":nth-child(1) > .pre-icon").should("be.visible");
  });

  it("Fingerprint icon is visible", () => {
    cy.get(":nth-child(2) > .pre-icon").should("be.visible");
  });

  it("Twitter icon is visible", () => {
    cy.get(":nth-child(1) > img").should("be.visible");
  });

  it("Facebook icon is visible", () => {
    cy.get(":nth-child(2) > img").should("be.visible");
  });

  it("LinkedIn icon is visible", () => {
    cy.get(":nth-child(3) > img").should("be.visible");
  });
});

describe("Validate Checkbox State", () => {
  it("Checkbox is checked", () => {
    cy.get(".form-check-input").should("not.have.attr", "checked");
  });
});

describe("Validate Log-in Functionality", () => {
  it("Both Username and Password must be present", () => {
    cy.get("#log-in").click();
    cy.get(".alert").should(
      "contain",
      "Both Username and Password must be present"
    );
  });
  it("Password must be present", () => {
    cy.get("#username").type("demo@applitools.com");
    cy.get("#log-in").click();
    cy.get(".alert").should("contain", "Password must be present");
  });
  it("Username must be present", () => {
    cy.get("#username").clear();
    cy.get("#password").type("password");
    cy.get("#log-in").click();
    cy.get(".alert").should("contain", "Username must be present");
  });
  it("Should log you in", () => {
    cy.get("#username").type("demo@applitools.com");
    cy.get("#password").type("password");
    cy.get("#log-in").click();
    cy.url().should("eq", "https://demo.applitools.com/hackathonApp.html");
  });
});
