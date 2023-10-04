import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('Boyner sitesine git', () => {
    cy.visit('https://www.boyner.com.tr')
});


And('arama kutusuna ceket yaz', (searchText)=>{
    cy.get('.header-top_headerTopSearchInput__hZ7mw').type("ceket")
    cy.get('.search-suggestion_searchBtn__Oemqg > .sc-fqkvVR').click();
})

When('erkek menusune bas', () =>{
    cy.get(':nth-child(1) > .collapse_root__SrpDo > .collapse_header__LAEcj > .collapse_title__y_n4k').click();
    cy.get('.checkbox-filter_container__DUb6C > :nth-child(1) > .checkbox_root__86e8X > :nth-child(1) > .checkbox_input__B5l_h').click();

})


And('onerilen siralama tikla',() => {
    cy.get('.product-list-options_selectedOption__STacx').click();
    
})

And('onerilen siralamayi fiyat dusukten yuksege yap',() => {
   
    cy.get('.product-list-options_options__xWUw0 > :nth-child(2) > :nth-child(1)').click();
})

Then('fiyatin dusukten yuksege oldugunu dogrula',() => {
    
    cy.get('[data-key="0"] > .product-item_root__6ZVGl > .product-item_content__9CfBp > a > .product-item_contentStyle__HMrrp > .product-price_root__5EsNB > .product-price_priceContainer__TsWtz > .product-price_checkPrice__NMY9e')
    .then(($elements) => {
        const firstProductPrice = parseFloat($elements.eq(0).text().replace('TL', '').replace(',', '.').replace(' ', '')); // İlk ürünün fiyatını alın ve uygun bir veri türüne dönüştürün
        const secondProductPrice = parseFloat($elements.eq(1).text().replace('TL', '').replace(',', '.').replace(' ', '')); // İkinci ürünün fiyatını alın ve uygun bir veri türüne dönüştürün
    
        // İkinci ürünün fiyatının birinci üründen büyük olduğunu kontrol edin.
        expect(secondProductPrice).to.be.greaterThan(firstProductPrice);
    });

})