import MenuTimingUi from "../PO/menuTimingUi";
import Zenbasket from "../../crud/PO/zenbasket.cy";
import menuTiming from '../../crud/PO/products/menuTiming'

const menuTimingComponent = new MenuTimingUi();
const zenbasket = new Zenbasket();
const menuTimingElement = new menuTiming();

describe('Should check whether product module is visible and it should contain menu timing', () => {
  it('Navigate to menu timing component', () => {
    // cy.pause();
    cy.wait(8000);
    zenbasket.navigate.products.product().click();
    zenbasket.navigate.products.product().click();
    cy.wait(1000);
    zenbasket.navigate.products.menuTiming().click();
    cy.wait(3000);
  });

  it('check whether tittle is exist and contains texts', () => {
    expect(menuTimingComponent.element.tittle().should('exist'));
    expect(menuTimingComponent.element.tittle().should('contain.text', menuTimingComponent.content[0]));
    expect(menuTimingComponent.element.subtittle().should('exist'));
    expect(menuTimingComponent.element.subtittle().should('contain.text', menuTimingComponent.content[1]));
    expect(menuTimingElement.button.addMenu().should('exist'));
    expect(menuTimingElement.button.addMenu().should('contain.text', menuTimingComponent.content[2]));
  });

  it('Should check whether table has rocords', () => {
    cy.get('body').then(($body) => {
      if ($body.find('.tableHeaderCard').is(':visible')) {
        expect(menuTimingComponent.table.header().eq(0).should('exist'));
        expect(menuTimingComponent.table.header().eq(0).should('contain.text', menuTimingComponent.table.content.Menu));
        expect(menuTimingComponent.table.header().eq(1).should('exist'));
        expect(menuTimingComponent.table.header().eq(1).should('contain.text', menuTimingComponent.table.content.Description));
        expect(menuTimingComponent.table.header().eq(2).should('exist'));
        expect(menuTimingComponent.table.header().eq(2).should('contain.text', menuTimingComponent.table.content.Action));
      } else {
        expect(menuTimingComponent.table.nodata().should('exist'));
        expect(menuTimingComponent.table.emptydata().should('exist'));
        expect(menuTimingComponent.table.emptydata().should('contain.text', menuTimingComponent.table.content.emptyData));
      }
    })
  });
});