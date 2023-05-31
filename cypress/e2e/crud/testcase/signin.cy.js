import SignIn from "../PO/signin";
import Zenbasket from "../PO/zenbasket.cy";

const signinComponent = new SignIn();
const zenbasket = new Zenbasket();

describe('E2E testing for Menu Timing Component', () => {
  it('launch application', () => {
    cy.visit(zenbasket.url.zenbasket);
    // cy.pause();
    cy.wait(10000);
  });

  it('Should enter required fields', () => {
    signinComponent.element.email().type('plancheck@mailinator.com');
    signinComponent.element.password().type('Admin@1234');
  });

  it('To click signin button', () => {
    signinComponent.element.signBtn().click();
    // cy.wait(5000);
  });
});