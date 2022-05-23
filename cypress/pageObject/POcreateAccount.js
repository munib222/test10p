/// <reference types="cypress" />


class LoginPage
{
    
Visit(){

    cy.visit('http://automationpractice.com/index.php')
    cy.title().should('eq', 'My Store')
   
}

FillCreateEmail(value){
  const signin =  cy.get ('.login').click()
    const Field = cy.get('#email_create').should('be.visible')
    Field.clear()
    Field.type(value)
    return this
}

SubmitAcc(){

    const Button = cy.get('#SubmitCreate > span').should('be.visible')
    Button.click()
}

    FillTitle(){
      const title = cy.get('#id_gender1')
      title.clear().click() 
    }

    FillFirstName(value){
      const firstname = cy.get('#customer_firstname').should('be.visible')
      firstname.clear()
      firstname.type(value)
    }
    FillLastName(value){
      const lastname = cy.get('#customer_lastname').should('be.visible')
      firstname.clear()
      firstname.type(value)
    }
    FillPassword(value){
      const lastname = cy.get('#passwd').should('be.visible')
      firstname.clear()
      firstname.type(value)
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

 

 export default LoginPage
