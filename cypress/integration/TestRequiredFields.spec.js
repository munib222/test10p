import HomePage from '../support/pageObject/POHomePage'
import POTestRequiredFields from '../support/pageObject/POTestRequiredFields'
/// <reference types="cypress" />


let accData = require('../fixtures/data.json')
    const home = new HomePage()
    const signin = new POTestRequiredFields()
describe('Test required fields', () => {

    it('URL visit and verify title', function()
    {
       home.Visit()
    })
       
    it('1.Verify required fields by passing empty', () => {
      signin.VisitSignin()  
      signin.FillCreateEmail(accData.CreateEmail)
      signin.SubmitAcc()
      signin.RegisterAccount()
      signin.validationMessages()
    })


})