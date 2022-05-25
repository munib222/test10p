///<reference types="Cypress"/>
class POLogin {
    constructor() {
        this.emailAddressTextBox = '#email',
            this.passwordTextBox = '#passwd',
            this.SignInButton = '#SubmitLogin > span'
        this.signedinUrl = 'http://automationpractice.com/index.php?controller=my-account',
            this.signout = '#header > div.nav > div > div > nav > div:nth-child(2) > a'

    }
    fillEmailAddress(email) {
        const emailAddress = cy.get(this.emailAddressTextBox).should('be.visible')
        emailAddress.clear()
        emailAddress.type(email)

    }
    fillPasswordField(psd) {
        const password = cy.get(this.passwordTextBox).should('be.visible')
        password.clear()
        password.type(psd)
    }
    clickSignIn() {
        const signInButton = cy.get(this.SignInButton).should('be.visible')
        signInButton.click()
        cy.url().should('eq', this.signedinUrl)
        cy.title().should('contains', 'My account', { matchcase: false })
    }
    clickSignout() {
        const signoutbtn = cy.get(this.signout)
        signoutbtn.click()

    }
}
export default POLogin