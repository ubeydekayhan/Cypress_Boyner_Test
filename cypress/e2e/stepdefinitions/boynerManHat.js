import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";
import { fa, faker } from '@faker-js/faker';
const mail = require("../../POM/boyner");


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
    cy.get(':nth-child(1) > .header-top_cardIcon__CBiyn > .sc-fqkvVR').click()
})

And('enter email',() => {

   // const email = faker.internet.email()
   cy.wait(3000)
    cy.get('.login-form_emailWrapper__UcrQc > :nth-child(1) > .input_inputGrid__UFWmw').type(data.email)

 //cy.get('.login-form_emailWrapper__UcrQc > :nth-child(1) > .input_inputGrid__UFWmw').type(mail.email())
   // cy.get('.login-form_emailWrapper__UcrQc > :nth-child(1) > .input_inputGrid__UFWmw').type("hakandenememail@gmail.com")
})

And('enter password',() => {
    let password = faker.internet.password();
   // cy.get(':nth-child(2) > :nth-child(1) > .input_inputGrid__UFWmw > .input_inputContent__emKRb').type("123hakan.")
    cy.get(':nth-child(2) > :nth-child(1) > .input_inputGrid__UFWmw > .input_inputContent__emKRb').type(data.password)
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
    cy.get(':nth-child(2) > .mega-menu_gift__ccvMi > span').trigger('mouseover', {force:true});
    
 
  });

  And('Select the Hat link', () => {
    cy.get("a[href='/erkek-sapka-kasket-c-3392760'").click()
 
  })

  And('Select the Puma mark Hat', () => {
    cy.wait(3000)
    cy.get('[data-key="4"] > .product-item_root__6ZVGl > .product-item_content__9CfBp > a > .product-item_brand__LFImW').click({force: true})
 
    cy.get('[data-key="4"] > .product-item_root__6ZVGl > .product-item_content__9CfBp > a > .product-item_brand__LFImW').invoke('text').then((text) => {
        const expectedProduct = text.trim();
    
      });
        
  })

  And('Add to cart', () => {
    cy.wait(3000)
    cy.get('.login-button_box__dnyuU').click({force: true})
 
  })

  And('go to cart', () => {
    cy.get('.product-added-card_cardBoxRight__r4cGW > .login-button_box__dnyuU').click({force: true})
    cy.wait(3000)
  })
  Then('verify added', () => {
    let actualProduct;
    cy.get('a > strong').invoke('text').then((text) => {
        actualProduct = text.trim();
       
      });
    expect(expectedProduct).to.equal(actualProduct)
 
  })
