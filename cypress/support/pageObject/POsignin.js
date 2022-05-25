
class CrAccount


{

  VisitSignin(){

    cy.get ('.login').click()
  }
  
FillCreateEmail(value){

    const Field = cy.get('#email_create').should('be.visible')
    Field.clear()
    Field.type(value)
    return this
}

SubmitAcc(){

    const Button = cy.get('#SubmitCreate > span').should('be.visible')
    Button.click()
    cy.wait(6000)
}

    FillTitle(){
      const mr = cy.get('#id_gender1')
      const mrs = cy.get('#id_gender2')
      mr.click() 
    }

    FillCFirstName(value){
      
      const Cfirstname = cy.get('#customer_firstname').should('be.visible')
      Cfirstname.clear()
      Cfirstname.type(value)
    }
    FillCLastName(value){
      const Clastname = cy.get('#customer_lastname')
      Clastname.clear()
      Clastname.type(value)
    }
    FillPassword(value){
      const Password = cy.get('#passwd').should('be.visible')
      Password.clear()
      Password.type(value)
    }

    FillDate(value){
      const date = cy.get('#days')
      date.select(value)
    }

    FillMonth(value){
      const month = cy.get('#months')
      month.select(value)
    }

    FillYear(value){
      const year = cy.get('#years')
      year.select(value)
    }

    FillFirstName(value){
      const firstname = cy.get('#firstname').should('be.visible')
      firstname.clear()
      firstname.type(value)
    }
    FillLastName(value){
      const lastname = cy.get('#lastname').should('be.visible')
      lastname.clear()
      lastname.type(value)
    }
    FillCompany(value){
      const company = cy.get('#company').should('be.visible')
      company.clear()
      company.type(value)
    }
    FillAddress(value){
      const address = cy.get('#address1').should('be.visible')
      address.clear()
      address.type(value)
    }
    FillCity(value){
      const city = cy.get('#city').should('be.visible')
      city.clear()
      city.type(value)
    }
    FillState(){
      const state = cy.get('#id_state').select('Arizona')
      
    }
    FillZip(value){
      const zip = cy.get('#postcode').should('be.visible')
      zip.clear()
      zip.type(value)
    }
    FillPhone(value){
      const phone = cy.get('#phone_mobile').should('be.visible')
      phone.clear()
      phone.type(value)
    }
    FillAlias(value){
      const alias = cy.get('#alias').should('be.visible')
      alias.clear()
      alias.type(value)
    }
    RegisterAccount(){
      const register = cy.get('#submitAccount > span').should('be.visible')
      register.click()
    }
}
 export default CrAccount