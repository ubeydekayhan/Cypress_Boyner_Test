import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

before(() => {
  //fixture klasorundan boynerData dosyasinda olusturulan datalari okumak icin
  cy.fixture("boynerCocuk").then(function (fixtureData) {
    data = fixtureData;
  });
});

Given("boyner sitesine git", () => {
  cy.visit(data.url);

  cy.get('[class="sc-fqkvVR byzlMQ icon-account"]').click();
  //  cy.get('.false').click()
});
