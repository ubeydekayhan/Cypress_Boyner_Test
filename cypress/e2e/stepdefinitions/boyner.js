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
       
    })
})


Given('Go to Boyner', () => {
cy.visit(data.url)
})

When('arama kutusuna {string} yaz', (searchText)=>{
    cy.wait(3000, {force:true})
   boynerMan.sendKeySearchBox(searchText)
})

Then('sonuca tikla', ()=>{
    boynerMan.elements.result().click()
})

And('arama sonucunda iki binden fazla sonuc oldugunu doğrula',()=>{
    boynerMan.elements.resultList().invoke('text').then((text) => {
      
        // Text içindeki rakamları alın ve gereksiz karakterleri temizleyin
        const total = parseInt(text.replace(/\D/g, ''));

        // Rakam 2000'den büyük mü diye kontrol ederim
        expect(total).to.be.greaterThan(2000);
        console.log(total);
})
})

