/// <reference types="cypress" />


class HomePage
{
    
Visit(){

    cy.visit('http://automationpractice.com/index.php')
    cy.title().should('eq', 'My Store')
   
}}
 export default HomePage
