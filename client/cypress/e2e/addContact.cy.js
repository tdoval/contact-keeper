describe('Add Contact', () => {
  it('User can login and Add new Contact', () => {
    //  login
    cy.visit('localhost:3000/');
    cy.findByRole('textbox').type('teste2@teste.com');
    cy.findByLabelText(/password/i).type('123456');
    cy.findByRole('button', { name: /login/i }).click();

    // Add Contact
  });
});
