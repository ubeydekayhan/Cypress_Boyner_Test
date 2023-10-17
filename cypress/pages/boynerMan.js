class BoynerMan{
    elements= {
        searchBox: () => cy.get('.header-top_headerTopSearchInputText__3artV'),
        result: () => cy.get('b'),
        resultList: () => cy.get('.product-list_total__TvMCW'),
        userIcon: () => cy.get(':nth-child(1) > .header-top_cardIcon__CBiyn > .sc-fqkvVR'),
        eposta: () => cy.get("input[placeholder='E-posta adresin"),
        password: () => cy.get(':nth-child(2) > :nth-child(1) > .input_inputGrid__UFWmw'),
        girisYap: () => cy.get("button[class='login-button_box__dnyuU login-form_loginSubmitButton__PhqyF"),
        onerilenSiralam: () => cy.get('.product-list-options_selectedOption__STacx'),
        dusuktenYuksege: () => cy.get('.product-list-options_options__xWUw0 > :nth-child(2) > :nth-child(1)'),
        erkekMenu: () => cy.get(':nth-child(2) > .mega-menu_gift__ccvMi'),
        sneaker: () =>  cy.get('a[href="/erkek-spor-ayakkabi-modelleri-c-200402"] h3:contains("Sneakers")'),
        login: () => cy.get(':nth-child(1) > .header-top_cardIcon__CBiyn > .sc-fqkvVR'),
        hatLink: () => cy.get("a[href='/erkek-sapka-kasket-c-3392760'"),
        puma: () => cy.get('[data-key="4"] > .product-item_root__6ZVGl > .product-item_content__9CfBp > a > .product-item_brand__LFImW'),
        addToCart: () => cy.get('.login-button_box__dnyuU'),
        goToCart: () => cy.get('.product-added-card_cardBoxRight__r4cGW > .login-button_box__dnyuU'),
    }

    sendKeySearchBox(key){
        this.elements.searchBox().type(key)
    }

    login(eposta, password){
        cy.get("input[placeholder='E-posta adresin") .should('be.visible', { timeout: 3000 }, {force: true});
        this.elements.eposta().type(eposta)
        cy.get("input[placeholder='E-posta adresin") .should('be.visible', { timeout: 3000 }, {force: true});
        this.elements.password().type(password)
}

    searchProduct(product){
        cy.get('.header-top_headerTopSearchInputText__3artV').click()
        cy.get('.search-suggestion_inputBox__2T6la > input').type(product)
        cy.get('.search-suggestion_searchBtn__Oemqg > .sc-fqkvVR').click();
    }
}


export const boynerMan= new BoynerMan();