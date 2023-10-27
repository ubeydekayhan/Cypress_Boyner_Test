class BoynerLogin{
    elements= {
        loginicon: () => cy.get(':nth-child(1) > .header-top_cardIcon__CBiyn > .sc-fqkvVR'),
        kabulEt:  ()=> cy.get('#onetrust-accept-btn-handler'),
        eposta: ()=> cy.get('.login-form_emailWrapper__UcrQc > :nth-child(1) > .input_inputGrid__UFWmw'),
        passwords: ()=> cy.get(':nth-child(2) > :nth-child(1) > .input_inputGrid__UFWmw'),
        girisyap: ()=> cy.get('.login-button_box__dnyuU'),
      
}};

export const boynerLogin = new BoynerLogin();

    