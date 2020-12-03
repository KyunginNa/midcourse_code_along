describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/')
  });

<<<<<<< HEAD
  it('contains title', () => {
    cy.get("section[data-cy='title']")
=======
  it('contains titel', () => {
    cy.get("section[name='title']")
>>>>>>> e012c7f... Initial commit
      .should('contain', 'GitHub Search engine')
  });
});