const randomName = require('random-name');

describe('Add Contact', () => {
  it('User can login and Add new Contact', () => {
    //  login
    cy.visit('localhost:3000/');
    cy.findByRole('textbox').type('teste2@teste.com');
    cy.findByLabelText(/password/i).type('123456');
    cy.findByRole('button', { name: /login/i }).click();

    // Add Contact
    const firstName = randomName.first();
    const lastName = randomName.last();
    cy.findByRole('textbox', { name: /name/i }).type(
      firstName + ' ' + lastName
    );
    cy.findByRole('textbox', { name: /email/i }).type(
      firstName + '_' + lastName + '@test.com'
    );
    const phoneNumber = Math.floor(100000000 + Math.random() * 900000000);
    cy.findByRole('textbox', { name: /phone/i }).type(phoneNumber);
    cy.findByRole('radio', { name: /professional/i }).check();
    cy.findByRole('button', { name: /add contact/i }).click();
  });
});
