
class POTestRequiredFields


{

  VisitSignin(){

    cy.get ('.login').click()
  }

FillCreateEmail(value){

    const Field = cy.get('#email_create').should('be.visible')
    Field.clear()
    Field.type(value)  
}

SubmitAcc(){

    cy.get('#SubmitCreate > span').click({force:true})
    cy.wait(6000)
}

    
    RegisterAccount(){
          cy.get('#submitAccount > span').click({force:true})
    }
    validationMessages(){

      cy.get('ol > :nth-child(2)').contains('required')
    }
}
 export default POTestRequiredFields