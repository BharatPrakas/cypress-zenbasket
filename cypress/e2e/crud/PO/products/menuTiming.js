class MenuTiming {
  element = {
    filter: () => cy.get('[data-control="search"]'),
  };

  button = {
    addMenu: () => cy.get('[data-control="Add Menu"]'),
    editIcon: () => cy.get('[data-control="edit0"]'),
    deleteIcon: () => cy.get('[data-control="delete0"]'),
    save: () => cy.get('[data-control="Save"]'),
    cancel: () => cy.get('[data-control="Cancel"]'),
    dialogAction: () => cy.get('.mat-dialog-actions'),
    clockBtnOk: () => cy.get('.timepicker-button > span').contains('Ok'),
    clockBtncancel: () => cy.get('.timepicker-button > span').contains('Cancel'),
  };

  addMenuTiming = {
    menuName: () => cy.get('[data-control="menuName"]'),
    selectCategories: () => cy.get('[data-control="menuCategories"]'),
    grocery: () => cy.get('mat-option').contains(' Grocery '),
    description: () => cy.get('[data-control="description"]'),
    locationPannel: () => cy.get('[data-control="locationPanel Test"]'),
    toggleBtn: () => cy.get('[data-control="isMenuAvailable"]'),
    selectDays: () => cy.get('[data-control="menuClosedDays"]'),
    days: () => cy.get('[data-control="days"]'),
    addMenuTiming: () => cy.get('[data-control="addWorkingHours"]'),
    monday: () => cy.get('mat-option').contains('Monday'),
    tuesday: () => cy.get('mat-option').contains('Tuesday'),
    startTime: () => cy.get('[data-control="startTime"]'),
    selectHour: () => cy.get('span').contains(7),
    selectMinute: () => cy.get('[style="transform: rotateZ(240deg) translateX(-50%);"] > span'),
    endTime: () => cy.get('[data-control="endTime"]'),
    selectEndHour: () => cy.get('span').contains(10),
  }
}
export default MenuTiming