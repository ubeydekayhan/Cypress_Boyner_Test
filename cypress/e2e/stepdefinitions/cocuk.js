import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('boyner sitesine git', () => {
  cy.viewport(1280, 720)
  
  cy.visit('https://www.boyner.com.tr/')


    cy.get('[class="sc-fqkvVR byzlMQ icon-account"]').click()
    cy.get('.false').click()

});
