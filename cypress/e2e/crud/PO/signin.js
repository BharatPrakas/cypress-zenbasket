class SignIn {
  element = {
    email: () => cy.get('[data-control="emailField"]'),
    password: () => cy.get('[data-control="passwordField"]'),
    signBtn: () => cy.get('[data-control="signinfunction"]'),
  }
}
export default SignIn