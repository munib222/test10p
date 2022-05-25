/// <reference types="Cypress" />
import POLogin from '../support/pageObject/POLogin'
import POcart from '../support/pageObject/POcart'
const HomePage = require('../support/pageObject/POHomePage')
const SigninPg = require('../support/pageObject/POsignin')
let accData = require('../fixtures/cart.json')
const home = new HomePage()
const signin = new SigninPg()
const Login = new POLogin()
const cart = new POcart()
describe('Cart Actions', () => {
    it('Add/Edit/Delete product to a cart', () => {
        home.Visit()
        signin.VisitSignin()
        Login.fillEmailAddress(accData.email_address)
        Login.fillPasswordField(accData.password)
        Login.clickSignIn()
        cart.addProduct()
       cart.editProduct()
       cart.deleteProduct()
    })
});
