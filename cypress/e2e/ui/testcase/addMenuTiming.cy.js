import addMenuTiming from '../PO/addMenuTiming'

const addMenu = new addMenuTiming()

describe('AddmenuTiming ui test', () => {
  it('To navigate addMenuTiming component', () => {
    expect(addMenu.element.addMenuBtn().should('exist'));
    addMenu.element.addMenuBtn().click();
  });

  it('Should check ui for addMenuTiming component', () => {
    expect(addMenu.element.tittle().should('exist'));
    expect(addMenu.element.tittle().should('contain.text', addMenu.content.tittle));
    expect(addMenu.element.subtittle().should('exist'));
    expect(addMenu.element.subtittle().should('contain.text', addMenu.content.subtittle));
    expect(addMenu.element.button.save().should('exist'));
    expect(addMenu.element.button.cancel().should('exist'));
    expect(addMenu.element.subtittle().should('contain.text', addMenu.content.subtittle));
    expect(addMenu.element.menuName().should('exist'));
    addMenu.element.menuName().click();
    addMenu.element.selectCategories().click();
    addMenu.element.selectCategories().focus().type('{esc}');
    cy.wait(1000);
    expect(addMenu.element.error.menuError().should('exist'));
    expect(addMenu.element.error.menuError().should('contain.text', addMenu.content.error.menuError));
    expect(addMenu.element.error.categoriesError().should('exist'));
    expect(addMenu.element.error.categoriesError().should('contain.text', addMenu.content.error.categoriesError));
    expect(addMenu.element.description().should('exist'));
    //location pannel
    expect(addMenu.element.locationPannelHeading().should('exist'));
    expect(addMenu.element.locationPannelHeading().should('contain.text', addMenu.content.locationPannelHeading));
    expect(addMenu.element.note().should('exist'));
    expect(addMenu.element.note().should('contain.text', addMenu.content.note));
    expect(addMenu.element.MenuAvailableTiming().should('exist'));
    expect(addMenu.element.MenuAvailableTiming().should('contain.text', addMenu.content.MenuAvailableTiming));
    addMenu.element.locationPannel().click();
    cy.wait(500);
    expect(addMenu.element.toggleBtn().eq(0).should('exist'));
    addMenu.element.toggleBtn().eq(0).click();
    cy.wait(500);
    expect(addMenu.element.MenuClosedDays().should('exist'));
    // expect(addMenu.element.MenuClosedDays().should('contain.text', addMenu.content.ClosedDays));
    expect(addMenu.element.selectDays().should('exist'));
    expect(addMenu.element.selectDays().click());
    cy.wait(1000);
    expect(addMenu.element.monday().should('exist'));
    expect(addMenu.element.tuesday().should('exist'));
    expect(addMenu.element.wednesday().should('exist'));
    expect(addMenu.element.Thursday().should('exist'));
    expect(addMenu.element.Frinday().should('exist'));
    expect(addMenu.element.Saturday().should('exist'));
    expect(addMenu.element.Sunday().should('exist'));
    expect(addMenu.element.monday().should('contain.text', addMenu.content.selectDays.monday));
    expect(addMenu.element.tuesday().should('contain.text', addMenu.content.selectDays.tuesday));
    expect(addMenu.element.wednesday().should('contain.text', addMenu.content.selectDays.wednesday));
    expect(addMenu.element.Thursday().should('contain.text', addMenu.content.selectDays.thursday));
    expect(addMenu.element.Frinday().should('contain.text', addMenu.content.selectDays.friday));
    expect(addMenu.element.Saturday().should('contain.text', addMenu.content.selectDays.saturday));
    expect(addMenu.element.Sunday().should('contain.text', addMenu.content.selectDays.sunday));
    addMenu.element.selectDays().focus().type('{esc}');
  });

  it('To navigte MenuTiming component', () => {
    expect(addMenu.element.button.cancel().should('exist'));
    addMenu.element.button.cancel().click();
    cy.wait(1000);
    expect(addMenu.element.dialog.header().should('exist'));
    expect(addMenu.element.dialog.header().should('contain.text', addMenu.content.dialog.header));
    expect(addMenu.element.dialog.content().should('exist'));
    expect(addMenu.element.dialog.content().should('contain.text', addMenu.content.dialog.content));
    expect(addMenu.element.dialog.noButton().should('exist'));
    expect(addMenu.element.dialog.yesButton().should('exist'));
    addMenu.element.dialog.yesButton().click();
  });
});