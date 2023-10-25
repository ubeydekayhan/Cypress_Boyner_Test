import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";
import { boynerMan } from "../../pages/boynerMan";

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


Given('Go to Boyner', () => {
    cy.visit(data.url)
});

And ('Click on user icon', () =>{
    boynerMan.elements.userIcon().click()
})


And ('enter email address', () =>{
   boynerMan.login(data.email, data.password)
})

And ('enter password', () =>{
   
})

And ('Click on Giriş Yap Button', () =>{
    boynerMan.elements.girisYap().click()
})

When('erkek menusune tikla',() => {

    boynerMan.elements.erkekMenu().trigger('mouseover')
    
});


And('sneakers sec',() => {
   boynerMan.elements.sneaker().should('be.visible', { timeout: 50000 });
    cy.wait(3000, {force:true})
    cy.get('a[href="/erkek-spor-ayakkabi-modelleri-c-200402"] h3:contains("Sneakers")').click({force:true});
   
})


And('marka nike sec',() => {
    /* cy.get(':nth-child(2) > .collapse_root__SrpDo > .collapse_header__LAEcj').should('be.visible', { timeout: 50000 });
    */
    cy.wait(3000, {force:true})
    cy.get(':nth-child(2) > .collapse_root__SrpDo > .collapse_header__LAEcj').click({force:true});
    cy.get(':nth-child(5) > .checkbox_root__86e8X > :nth-child(1) > .checkbox_box__1NS2V').click({force:true});
   
})


Then('urunlerde nike oldugunu dogrula', () => {
   /* cy.get('div[class="product-item_brand__LFImW"]').should('be.visible', { timeout: 50000 }); 
   */
   cy.wait(5000, {force:true})
    cy.get('div[class="product-item_brand__LFImW"]').then(($elements) => {
        
      const firstProductMarkText = $elements.eq(1).text(); // İlk ürünün fiyatını metin olarak alın
      const secondProductMarkText = $elements.eq(2).text(); // İkinci ürünün fiyatını metin olarak alın
  
      // Fiyat metinlerinde "Nike" kelimesini kontrol edin
      expect(firstProductMarkText).to.include('Nike');
      expect(secondProductMarkText).to.include('Nike');
    });
  });


