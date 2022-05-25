/// <reference types="Cypress" />
import POFailedLogin from '../support/pageObject/POFailedLogin'
const HomePage = require('../support/pageObject/POHomePage')
const SigninPg = require('../support/pageObject/POsignin')
const home = new HomePage()
const signin = new SigninPg()
const FailedLogin = new POFailedLogin()
describe('Failed Login', () => {

    it('Fail login by passing empty email/password', function () {
        home.Visit()
    })
    it('Failed Login by keeping fields empty', () => {

        signin.VisitSignin()
        FailedLogin.emptyEmailAddress()
        FailedLogin.emptyPasswordField()
        FailedLogin.clickSignIn()
    })
})