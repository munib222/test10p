const HomePage = require('../pageObject/POHomePage')
const SigninPg = require('../pageObject/POsignin')
/// <reference types="cypress" />

// let homePageData = new homeKayakPage()
// let flightPageData = new flightKayakPage()
let accData = require('../fixtures/data.json')
    const home = new HomePage()
    const signin = new SigninPg()
describe('First Test suite', () => {

    it('URL visit and verify title', function()
    {
       home.Visit()
    })
       
    it('1.Create account into the site', () => {
      signin.VisitSignin()  
      signin.FillCreateEmail(accData.CreateEmail)
      signin.SubmitAcc()
      signin.FillTitle()
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


 //       homePageData.clickFlight()
        
        // flightPageData.flightPageTitle().should("eq", 'Book the right flight with our no change fees filter.')
        // flightPageData.removeAllDesination()
        

        // flightPageData.clickOrigin()
        // flightPageData.typeOrigin("Karachi, Pakistan")
        // flightPageData.dropdownCountrySelection("Karachi")

        // flightPageData.bodyClick()

        // flightPageData.clickDestination()
        // flightPageData.typeDesination("Mumbai, India")
        // flightPageData.dropdownCountrySelection("Mumbai")

        // flightPageData.bodyClick()

        // flightPageData.selectButton(1)
        // flightPageData.passengersData(0,4)
        // flightPageData.passengersData(1,1)
        // flightPageData.passengersData(2,2)
        // flightPageData.passengersData(3,2)
        // flightPageData.passengersData(4,2)

        // flightPageData.bodyClick()

        // flightPageData.clickSubmit()

    })
    
    // it('Click', () => {
    //     homePageData.clickFlight()
    // })
})