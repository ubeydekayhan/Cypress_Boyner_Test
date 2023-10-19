import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";
import { fa, faker } from '@faker-js/faker';
const mail = require("../../POM/boyner");
import { boynerMan } from "../../pages/boynerMan";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

let expectedURL;
let data;
let expectedProduct
before(() => {
    //fixture klasorundan boynerData dosyasinda olusturulan datalari okumak icin
    cy.fixture("boynerErkek").then(function (fixtureData) {
        data = fixtureData;
        cy.viewport(1000, 600) //ekran ayarini yapar
    })
})

const login = 'kullaniciAdi'; // Örnek bir değişken

export default {
    login: login
};


Given('Go to Boyner', () => {
    cy.visit(data.url)
    //cy.get('#onetrust-accept-btn-handler').click({force: true})
    cy.url().then(url => {
        expectedURL = url;
        cy.log('Current URL:', expectedURL);
      });
});

When('click login button',() =>  {
    boynerMan.elements.login().click()
})

And('enter email',() => {
  let password = faker.internet.password();
   // const email = faker.internet.email()
   boynerMan.login(data.email, data.password)
   //login(data.email, data.password)

 //cy.get('.login-form_emailWrapper__UcrQc > :nth-child(1) > .input_inputGrid__UFWmw').type(mail.email())
   // cy.get('.login-form_emailWrapper__UcrQc > :nth-child(1) > .input_inputGrid__UFWmw').type("hakandenememail@gmail.com")
})

And('enter password',() => {
    
   
   
})

And('click to login',() => {
    cy.get('.login-button_box__dnyuU').click()
})

Then('verify login',() => {
   let actualURL;
    cy.url().then(url => {
        actualURL = url;
        cy.log('actualURL URL:', actualURL);
        console.log('actualURL URL:', actualURL)
         expect(expectedURL).not.to.equal(actualURL);
      });
     
})

And('Click the Man menu', () => {
    boynerMan.elements.erkekMenu().trigger('mouseover', {force:true});
    
 
  });

  And('Select the Hat link', () => {
    boynerMan.elements.hatLink().click()
 
  })

  And('Select the Puma mark Hat', () => {
    cy.wait(3000)
    boynerMan.elements.puma().click({force: true})
 
    boynerMan.elements.puma().invoke('text').then((text) => {
        const expectedProduct = text.trim();
    
      });
        
  })

  And('Add to cart', () => {
    boynerMan.elements.addToCart().should('be.visible', { timeout: 10000 }, {force: true});
    boynerMan.elements.addToCart().click({force: true})
 
  })

  And('go to cart', () => {
    boynerMan.elements.goToCart().click({force: true})
   
  })
  Then('verify added', () => {
    let actualProduct;
    cy.get('a > strong').should('be.visible', { timeout: 10000 }, {force: true});
    cy.get('a > strong').invoke('text').then((text) => {
        actualProduct = text.trim();
       
      });
    expect(expectedProduct).to.equal(actualProduct)
 
  })

  And('send {string} to searchbox',(aranacakUrun)=>{
    
    boynerMan.searchProduct(aranacakUrun);
})
And('select man to the sex menu',() => {
  cy.get('.product-list_header__u25NX').should('be.visible', { timeout: 10000 }) //arama sonucu texti gorene kadar bekler

    cy.get(':nth-child(1) > .collapse_root__SrpDo > .collapse_header__LAEcj > .collapse_title__y_n4k').click() //cinsiyet
    cy.get('.checkbox-filter_container__DUb6C > :nth-child(2) > .checkbox_root__86e8X > :nth-child(1) > .checkbox_box__1NS2V').click() //erkek

    

})


And('verify {string} or {string} in to the result',(urun, urun2) => {
    
    cy.verifyTextInElements("div[class='line-clamp-2 text-gray-600 h-9 text-xs leading-4.5 mb-1.5']",urun, urun2)
})
