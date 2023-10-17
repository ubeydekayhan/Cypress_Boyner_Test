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

And('arama kutusuna ceket yaz', (searchText)=>{
    boynerMan.searchProduct(searchText )
})


When('erkek menusune bas', () =>{

    cy.get(':nth-child(1) > .collapse_root__SrpDo > .collapse_header__LAEcj > .collapse_title__y_n4k').click({force:true});
    cy.get('.checkbox-filter_container__DUb6C > :nth-child(1) > .checkbox_root__86e8X > .d-flex > .checkbox_label__pjGfx').click({force:true});

})


And('onerilen siralama tikla',() => {
    boynerMan.elements.onerilenSiralam().click({force:true});
    
})

And('onerilen siralamayi fiyat dusukten yuksege yap',() => {
   
    boynerMan.elements.dusuktenYuksege().click({force:true});
})

Then('fiyatin dusukten yuksege oldugunu dogrula',() => {
    
    cy.get('div[class="product-price_checkPrice__NMY9e"]').invoke('text').then((text) => {
        cy.log(text);
      });
    cy.get('div[class="product-price_checkPrice__NMY9e"]')
    .then(($elements) => {
        const firstProductPrice = parseFloat($elements.eq(1).text().replace('TL', '').replace(',', '').replace(' ', '')); // İlk ürünün fiyatını alın ve uygun bir veri türüne dönüştürün
        const secondProductPrice = parseFloat($elements.eq(2).text().replace('TL', '').replace(',', '').replace(' ', '')); // İkinci ürünün fiyatını alın ve uygun bir veri türüne dönüştürün
    
        // İkinci ürünün fiyatının birinci üründen büyük olduğunu kontrol edin.
        expect(secondProductPrice).to.be.greaterThan(firstProductPrice);
    });
})
