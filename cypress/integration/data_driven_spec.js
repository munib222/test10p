// const homeKayakPage = require('../pages/homeKayakPage.js')
// const flightKayakPage = require('../pages/flightKayakPage')
// /// <reference types="cypress" />

// let homePageData = new homeKayakPage()
// let flightPageData = new flightKayakPage()
// const tests = require('../fixtures/data.json')
// describe('First Test suite', () => {
    
//     beforeEach(() => {
//         cy.visit("https://www.kayak.com/")
//     })

//     tests.forEach(test_data => {
//         it(test_data.Name, () => {

//             homePageData.homePageTitle().should("eq", "Compare rental car deals to find the right one.")
//             homePageData.clickFlight()
            
//             flightPageData.flightPageTitle().should("eq", 'Book the right flight with our no change fees filter.')
//             flightPageData.removeAllDesination()

//             flightPageData.clickOrigin()
//             flightPageData.typeOrigin(test_data['Origin Input'])
//             flightPageData.dropdownCountrySelection(test_data['Origin Selection'])
            
//             flightPageData.bodyClick()

//             flightPageData.clickDestination()
//             flightPageData.typeDesination(test_data['Destination Input'])
//             flightPageData.dropdownCountrySelection(test_data['Destination Selection'])

//             flightPageData.bodyClick()
//             flightPageData.selectButton(1)

//             flightPageData.passengersData(0, test_data.Passengers.Adults)
//             // flightPageData.passengersData(1,1)
//             flightPageData.passengersData(2,test_data.Passengers.Seniors)
//             flightPageData.passengersData(3,test_data.Passengers.Youth)
//             flightPageData.passengersData(4,test_data.Passengers.Child)
//             flightPageData.passengersData(5,test_data.Passengers['Seat Infant'])
//             flightPageData.passengersData(6,test_data.Passengers['Lap Infant'])

//             flightPageData.bodyClick()

//             flightPageData.clickSubmit()

//         }) 

//     });

// })