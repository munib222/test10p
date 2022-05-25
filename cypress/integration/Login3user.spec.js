/// <reference types="Cypress" />
import POFailedLogin from '../support/pageObject/POFailedLogin'
import POLogin from '../support/pageObject/POLogin'
const HomePage = require('../support/pageObject/POHomePage')
const SigninPg = require('../support/pageObject/POsignin')
let accData = require('../fixtures/login.json')
const home = new HomePage()
const signin = new SigninPg()
const FailedLogin = new POFailedLogin()
const Login = new POLogin()
describe('Login by 3 different users', () => {

    it('URL visit and verify login by 3 users', function () {
        home.Visit()
    })
    it('Login', () => {
      cy.get(accData).each((param) => {

            home.Visit()
            signin.VisitSignin()
            Login.fillEmailAddress(param.email_address)
            Login.fillPasswordField(param.password)
            Login.clickSignIn()
            Login.clickSignout()
           })
    })
})