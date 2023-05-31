class AddMenuTiming {
  content = {
    tittle: 'Add Menu Timing',
    subtittle: 'Add your store menu timing here..',
    locationPannelHeading: 'Locations',
    note: 'Note: Open location to give menu available timing in particular location',
    MenuAvailableTiming: 'Menu Available Timing',
    ToggleLable: 'Available ',
    ClosedDays: 'Choose Menu Closed days :',
    selectDays: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday'
    },
    error: {
      dayError: 'Select day is required.',
      startTimeError: 'Start time is required.',
      endTimeError: 'End time is required.',
      menuError: ' Menu name is required. ',
      categoriesError: 'Menu categories are required.',
    },
    dialog: {
      header: 'Are you sure?',
      content: 'You have unsaved changes. Are you sure you want to leave this page?',
    }
  };

  element = {
    tittle: () => cy.get('h2'),
    subtittle: () => cy.get('h3').eq(0),
    locationPannelHeading: () => cy.get('h3').eq(1),
    addMenuBtn: () => cy.get('[data-control="Add Menu"]'),
    menuName: () => cy.get('[data-control="menuName"]'),
    selectCategories: () => cy.get('[data-control="menuCategories"]'),
    grocery: () => cy.get('mat-option').contains(' Grocery '),
    description: () => cy.get('[data-control="description"]'),
    locationPannel: () => cy.get('[data-control="locationPanel Test"]'),
    note: () => cy.get('.location-note-section'),
    MenuAvailableTiming: () => cy.get('.bold-heading-style'),
    toggleBtn: () => cy.get('[data-control="isMenuAvailable"]'),
    MenuClosedDays: () => cy.get('.menu-closed-day-heading'),
    selectDays: () => cy.get('[data-control="menuClosedDays"]'),
    days: () => cy.get('[data-control="days"]'),
    addMenuTiming: () => cy.get('[data-control="addWorkingHours"]'),
    monday: () => cy.get('mat-option').contains('Monday'),
    tuesday: () => cy.get('mat-option').contains('Tuesday'),
    wednesday: () => cy.get('mat-option').contains('Wednesday'),
    Thursday: () => cy.get('mat-option').contains('Thursday'),
    Frinday: () => cy.get('mat-option').contains('Friday'),
    Saturday: () => cy.get('mat-option').contains('Saturday'),
    Sunday: () => cy.get('mat-option').contains('Sunday'),
    startTime: () => cy.get('[data-control="startTime"]'),
    selectHour: () => cy.get('span').contains(7),
    selectMinute: () => cy.get('[style="transform: rotateZ(240deg) translateX(-50%);"] > span'),
    endTime: () => cy.get('[data-control="endTime"]'),
    selectEndHour: () => cy.get('span').contains(10),
    error: {
      menuError: () => cy.get('[data-control="nameRequiredError"]'),
      categoriesError: () => cy.get('[data-control="menuCategoriesRequiredError"]'),
      dayError: () => cy.get('[data-control="daysError"]'),
      startTimeError: () => cy.get('[data-control="startTimeError"]'),
      endTimeError: () => cy.get('[data-control="endTimeError"]'),
    },
    button: {
      save: () => cy.get('[data-control="Save"]'),
      cancel: () => cy.get('[data-control="Cancel"]'),
      dialogAction: () => cy.get('.mat-dialog-actions'),
      clockBtnOk: () => cy.get('.timepicker-button > span').contains('Ok'),
      clockBtncancel: () => cy.get('.timepicker-button > span').contains('Cancel'),
    },
    dialog: {
      header: () => cy.get('.dialog-header'),
      content: () => cy.get('.dialog-sub-content'),
      noButton: () => cy.get('[data-control="leftbutton"]'),
      yesButton: () => cy.get('[data-control="rightbutton"]'),
    }
  }
}
export default AddMenuTiming