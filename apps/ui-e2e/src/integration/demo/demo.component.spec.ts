describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=democomponent--primary'));

  it('should render the component', () => {
    cy.get('org-demo').should('exist');
  });
});
