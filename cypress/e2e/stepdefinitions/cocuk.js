import {Before , Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { boynerLogin } from "../../pages/boynerLogin";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

let data;
Before(() => {
  //fixture klasorundan boynerData dosyasinda olusturulan datalari okumak icin
  cy.fixture("boynerCocuk").then(function (fixtureData) {
    data = fixtureData;
  });
});

Given("navigate to main page url", () => {
  cy.visit(data.url);

 

 
});

When('click login icon ang go to login page',()=>{
  
  cy.waitforclick(boynerLogin.elements.kabulEt);



  boynerLogin.elements.loginicon().click();

  //npm install cypress-wait-until --save-dev
  //import 'cypress-wait-until';


})

Then('fill username and password',()=>{

cy.waitAndtype(boynerLogin.elements.eposta ,data.email)

boynerLogin.elements.passwords().type(data.password)

boynerLogin.elements.girisyap().click();

})
