import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

And('kullanici saat&aksesuar bolumune tiklar', () => {
    cy.get(':nth-child(8) > .mega-menu_gift__ccvMi > span').click()
   
});

Then('kullanici saat&aksesuar bolumunde oldugunu dogrular', () => {
    cy.url().should('include','saat-aksesuar')
   
});




