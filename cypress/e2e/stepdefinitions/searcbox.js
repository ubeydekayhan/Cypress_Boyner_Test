import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"


Given('go to url', () => {
    cy.visit('https://www.boyner.com.tr/')
})

Then('To be searched {string}', (Aranacak_Kelime) => {
    cy.get('.header-top_headerTopSearchInputText__3artV').type(Aranacak_Kelime)
})
And('Click to Ara_Button', () => {
    cy.contains('button', 'ARA').click({force:true});
})
And('Verify the search result {string}',(Aranacak_Kelime) => {
cy.title().should('include', Aranacak_Kelime)
})

