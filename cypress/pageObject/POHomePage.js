/// <reference types="cypress" />


class HomePage
{
    
Visit(){

    cy.visit('http://automationpractice.com/index.php')
    cy.title().should('eq', 'My Store')
   
}

    //cy.get('.toast-success > .toast-message', {timeout: 600000}).should('be.visible')
}

// FillEmail(value){
//     const signin =  cy.get ('.login').click()
//       cy.get ('#email_create').click().clear().type('munib.hexor@gmail.co')
//       const Field = cy.get('#email_create').should('be.visible')
//       Field.clear()
//       Field.type(value)
//       return this
//   }

// FillPassword(value){
//     const Field = cy.get('#password').should('be.visible')   
//     Field.clear()
//     Field.type(value)
//     return this

// }
// Submit(){

//     const Button = cy.get('[type="submit"]').contains('Login').should('be.visible')
//     Button.click()
//     //cy.get('.toast-success > .toast-message', {timeout: 600000}).should('be.visible')
// }

 

 export default HomePage
