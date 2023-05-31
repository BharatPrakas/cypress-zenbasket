import Zenbasket from "../PO/zenbasket.cy";
import MenuTiming from "../PO/products/menuTiming";

const zenbasket = new Zenbasket();
const menuTimingComponent = new MenuTiming();

describe('Sample test', () => {
  it('Navigate to menu timing component', () => {
    zenbasket.navigate.products.product().click();
    cy.wait(1000);
    zenbasket.navigate.products.menuTiming().click();
    cy.wait(3000);
  });

  it('Navigate to menu timing component', () => {
    menuTimingComponent.button.addMenu().click();
    cy.wait(3000);
  });

  it('to Handle Initial errors', () => {
    menuTimingComponent.addMenuTiming.menuName().type('demo');
    cy.wait(500);
    menuTimingComponent.button.cancel().click();
    cy.wait(500);
    menuTimingComponent.button.dialogAction().click();
    cy.wait(3000);
    menuTimingComponent.button.addMenu().click();
    cy.wait(3000);
    menuTimingComponent.button.save().click();
    cy.wait(1000);
    menuTimingComponent.button.dialogAction().click();
    cy.wait(1000);
  });

  it('fill the details', () => {
    menuTimingComponent.addMenuTiming.menuName().type('demo');
    menuTimingComponent.addMenuTiming.selectCategories().click();
    menuTimingComponent.addMenuTiming.grocery().click();
    cy.wait(1000)
    menuTimingComponent.addMenuTiming.selectCategories().focus().type('{esc}');
    menuTimingComponent.addMenuTiming.description().type('nothing');
    cy.wait(1000);
  });

  it('fill the location details ', () => {
    menuTimingComponent.addMenuTiming.locationPannel().click();
    cy.wait(500);
    menuTimingComponent.addMenuTiming.toggleBtn().eq(0).click();
    cy.wait(500);
    menuTimingComponent.addMenuTiming.selectDays().click();
    cy.wait(500);
    menuTimingComponent.addMenuTiming.monday().click();
    cy.wait(500);
    menuTimingComponent.addMenuTiming.selectCategories().focus().type('{esc}');
    cy.wait(500);
    menuTimingComponent.addMenuTiming.addMenuTiming().click();
    cy.wait(1000);
    menuTimingComponent.addMenuTiming.addMenuTiming().click();
    cy.wait(1000);
    menuTimingComponent.button.dialogAction().click();
    cy.wait(500);
    menuTimingComponent.addMenuTiming.days().click();
    cy.wait(500);
    menuTimingComponent.addMenuTiming.tuesday().click();
    cy.wait(500);
    menuTimingComponent.addMenuTiming.selectCategories().focus().type('{esc}');
    cy.wait(500);
    menuTimingComponent.addMenuTiming.startTime().click();
    cy.wait(500);
    menuTimingComponent.addMenuTiming.selectHour().click();
    // cy.wait(500);
    // menuTimingComponent.addMenuTiming.selectMinute().click();
    cy.wait(500);
    menuTimingComponent.button.clockBtnOk().click();
    cy.wait(500);
    menuTimingComponent.addMenuTiming.endTime().click();
    cy.wait(500);
    menuTimingComponent.addMenuTiming.selectEndHour().click();
    // cy.wait(500);
    // menuTimingComponent.addMenuTiming.selectMinute().click();
    cy.wait(500);
    menuTimingComponent.button.clockBtnOk().click();
    cy.wait(500);
    menuTimingComponent.addMenuTiming.locationPannel().click();
  });

  it('to click save button', () => {
    menuTimingComponent.button.save().click();
  });

  it('to click dialog okey button', () => {
    cy.wait(1000);
    menuTimingComponent.button.dialogAction().click();
  });

  it('Edit menuTiming', () => {
    cy.wait(1000);
    menuTimingComponent.element.filter().type('demo');
    cy.wait(3000);
    menuTimingComponent.button.editIcon().click();
    cy.wait(3000);
    menuTimingComponent.addMenuTiming.menuName().clear();
    cy.wait(1000);
    menuTimingComponent.addMenuTiming.menuName().type('test');
    cy.wait(3000);
    menuTimingComponent.button.save().click();
    cy.wait(1000);
    menuTimingComponent.button.dialogAction().click();
  });

  it('Edit menuTiming', () => {
    cy.wait(1000);
    menuTimingComponent.element.filter().type('test');
    cy.wait(3000);
    menuTimingComponent.button.deleteIcon().click();
    cy.wait(2000);
    menuTimingComponent.button.dialogAction().click();
    cy.wait(2000);
    menuTimingComponent.button.dialogAction().click();
    menuTimingComponent.element.filter().clear();
  });
});