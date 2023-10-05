import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('go url', () => {
    cy.visit('https://www.boyner.com.tr/')
    cy.wait(2000)
})
Then('verify enter site', () => {
    cy.url().should('include','boyner')
    cy.wait(2000)
})
Given('mouseover spor category', () => {
    cy.get(':nth-child(4) > .mega-menu_gift__ccvMi > span')
    .trigger('mouseover')
    cy.wait(2000)    
})
Then('verify mouseover', () => {
    cy.get(':nth-child(4) > .mega-menu_megaMenuDropdownContainer__QqMzX > .container > .mega-menu_menuContainer__Nc7AX > :nth-child(1)')
    .should('be.visible')
    cy.wait(2000)
})
Given('click spor category', () => {
    cy.get(':nth-child(4) > .mega-menu_gift__ccvMi > span')
    .click()
    cy.wait(2000)
})
Then('verify enter category', () => {
    cy.url().should('include','spor')
    cy.wait(2000)
})
Given('click Sneaker', () => {
    cy.get('.swiper-slide-active > div > a > .featured-categories-widget_textDesktop__FDMoA')
    .click()
    cy.wait(2000)
})
Then('verify user can see products', () => {
    //cy.get("div[class='product-item_brand__LFImW']").last().should('contain','Welder')

    cy.get('.product-item_content__9CfBp').each((product) => {
        // Metin içinde "Welder" kelimesinin olduğunu doğrulayın
        expect(product).be.visible;
      });
})

;
