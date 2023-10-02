import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

And('kullanici welder markasina tiklar', () => {
    cy.get('.swiper-slide-next > .device-desktop-category_imageWrapper__Aj5r6 > a > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="Welder"]').click()
});

Then('gelen urunlerin welder oldugunu dogrular', () => {
    //cy.get("div[class='product-item_brand__LFImW']").last().should('contain','Welder')

    cy.get('div.product-item_brand__LFImW').should('have.length', 50).each(($el) => {
        // Her öğenin içindeki metni alın
        const text = $el.text();
        // Metin içinde "Welder" kelimesinin olduğunu doğrulayın
        expect(text).to.include('Welder');
      });
});


