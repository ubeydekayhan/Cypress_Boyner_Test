import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('google sitesine git', () => {
    cy.visit('https://www.google.com')
});
