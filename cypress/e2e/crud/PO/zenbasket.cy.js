class Zenbasket {
  url = {
    zenbasket: 'https://dev.dashboard.getzenbasket.com/signin',
  }
  navigate = {
    products: {
      product: () => cy.get('[data-control="Products"]'),
      menuTiming: () => cy.get('[data-control="Menu Timing"]')
    }
  }
}
export default Zenbasket