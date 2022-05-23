const createAccount = require('../pageObject/POcreateAccount')

/// <reference types="cypress" />

// let homePageData = new homeKayakPage()
// let flightPageData = new flightKayakPage()
let accData = require('../fixtures/data.json')
    const acc = new createAccount()
describe('First Test suite', () => {

    it('URL visit and verify title', function()
    {
       acc.Visit()
    })
       
    it('1.Create account into the site', () => {
        
      acc.FillCreateEmail(accData.CreateEmail)
      acc.SubmitAcc()

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