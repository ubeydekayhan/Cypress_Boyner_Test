import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('Boyner sitesine git', () => {
    cy.visit('https://www.boyner.com.tr')
});

When('erkek menusune bas', () =>{
    cy.get('.header-top_headerTopSearchInput__hZ7mw').type(searchText)
})

Then('Erkek penceresinde oldugunu dogrula',() => {
    cy.get('.header-top_headerTopSearchInput__hZ7mw').type(searchText)
})

And('arama kutusuna ceket yaz', (searchText)=>{
    cy.get('.header-top_headerTopSearchInput__hZ7mw').type(searchText)
})

And('onerilen siralamayi fiyat dusukten yuksege yap',() => {
    cy.get('.header-top_headerTopSearchInput__hZ7mw').type(searchText)
})

Then('fiyatin dusukten yuksege oldugunu dogrula',() => {
    cy.get('.header-top_headerTopSearchInput__hZ7mw').type(searchText)
})


