///<reference types="Cypress"/>
class POFailedLogin{
constructor()
{
this.emailAddressTextBox='#email',
this.passwordTextBox='#passwd',
this.SignInButton='#SubmitLogin > span',
this.FailedSignInUrl='http://automationpractice.com/index.php?controller=authentication',
this.errorMessage='#center_column > div.alert.alert-danger'

}
emptyEmailAddress(){
const emailAddress= cy.get(this.emailAddressTextBox).should('be.visible')
emailAddress.clear()

}
emptyPasswordField(){
const password=cy.get(this.passwordTextBox).should('be.visible')
password.clear()
}
clickSignIn(){
const signInButton=cy.get(this.SignInButton).should('be.visible')
signInButton.click()
cy.url().should('eq',this.FailedSignInUrl)
cy.get(this.errorMessage).contains('An email address required',{matchCase:false})
}
}
export default POFailedLogin