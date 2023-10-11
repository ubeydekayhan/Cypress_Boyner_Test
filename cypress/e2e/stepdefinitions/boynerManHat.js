import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";
import { fa, faker } from '@faker-js/faker'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
let data;
before(() => {
    //fixture klasorundan boynerData dosyasinda olusturulan datalari okumak icin
    cy.fixture("boynerErkek").then(function (fixtureData) {
        data = fixtureData;
        cy.viewport(1000, 600) //ekran ayarini yapar
    })
})

let currentURL;
Given('Go to Boyner', () => {
    cy.visit(data.url)
    //cy.get('#onetrust-accept-btn-handler').click({force: true})
    cy.url().then(url => {
        currentURL = url;
        cy.log('Current URL:', currentURL);
      });
});

When('click login button',() =>  {
    cy.get(':nth-child(1) > .header-top_cardIcon__CBiyn > .sc-fqkvVR').click()
})

And('enter email',() => {
   // const email = faker.internet.email()
  //  cy.get('.login-form_emailWrapper__UcrQc > :nth-child(1) > .input_inputGrid__UFWmw').type(email)
    cy.get('.login-form_emailWrapper__UcrQc > :nth-child(1) > .input_inputGrid__UFWmw').type("hakandenememail@gmail.com")
})

And('enter password',() => {
    const password = faker.internet.password();
    cy.get(':nth-child(2) > :nth-child(1) > .input_inputGrid__UFWmw > .input_inputContent__emKRb').type("123hakan.")
})

And('click to login',() => {
    cy.get('.login-button_box__dnyuU').click()
})

Then('verify log in',() => {
   
    cy.url().then(url => {
        actualURL = url;
        cy.log('actualURL URL:', actualURL);
         expect(currentURL).to.equal(actualURL);
      });
     
})

And('Click the Man menu', () => {
    // currentURL ve actualURL'yi karşılaştırın
 
  });
