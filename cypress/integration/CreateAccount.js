const HomePage = require('../support/pageObject/POHomePage')
const SigninPg = require('../support/pageObject/POsignin')
/// <reference types="cypress" />

let accData = require('../fixtures/data.json')
    const home = new HomePage()
    const signin = new SigninPg()
describe('Signup and create account', () => {

    it('URL visit and verify title', function()
    {
       home.Visit()
    })
       
    it('1.Create account into the site', () => {
      signin.VisitSignin()  
      signin.FillCreateEmail(accData.CreateEmail)
      signin.SubmitAcc()
      signin.FillCFirstName(accData.FirstName)
      signin.FillCLastName(accData.LastName)
      signin.FillPassword(accData.Password)
      signin.FillDate(accData.Date)
      signin.FillMonth(accData.Month)
      signin.FillYear(accData.Year)
      signin.FillFirstName(accData.FirstName)
      signin.FillLastName(accData.LastName)
      signin.FillCompany(accData.Company)
      signin.FillAddress(accData.Address)
      signin.FillCity(accData.City)
      signin.FillState()
      signin.FillZip(accData.Zip)
      signin.FillPhone(accData.Phone)
      signin.FillAlias(accData.Alias)
      signin.RegisterAccount()

    })
})