import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('kullanici boyner anasayfasina gelir', () => {
    cy.visit('https://www.boyner.com.tr/')
});

And('kullanici imleci saat&aksesuar uzerine getirir', () => {
    cy.get(':nth-child(8) > .mega-menu_gift__ccvMi > span').trigger('mouseover')
   
});

Then('cikan ekranda baslik dogrulanir', () => {
    cy.get(':nth-child(8) > .mega-menu_megaMenuDropdownContainer__QqMzX > .container > .mega-menu_menuContainer__Nc7AX')
        .should('contain', 'Erkek Aksesuar').should('contain','Çocuk Aksesuar').should('contain','Telefon Aksesuar')
});
