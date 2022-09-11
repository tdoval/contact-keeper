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
    const email = firstName + '_' + lastName + '@test.com';

    cy.findByRole('textbox', { name: /name/i }).type(
      firstName + ' ' + lastName
    );
    cy.findByRole('textbox', { name: /email/i }).type(email);
    const phoneNumber = Math.floor(100000000 + Math.random() * 900000000);
    cy.findByRole('textbox', { name: /phone/i }).type(phoneNumber);
    const roles = ['professional', 'personal'];
    const role = roles[Math.floor(Math.random() * roles.length)];
    // cy.findByRole('radio', { name: role }).check();
    cy.get(`#${role}`).check();
    cy.findByRole('button', { name: /add contact/i }).click();

    // Verify if Contact was Added
    cy.findByText(email).should('be.visible');

    // Edit Contact
    cy.findByRole('button', { name: `edit-${email}` }).click();
    cy.findByRole('textbox', { name: /name/i })
      .focus()
      .clear()
      .type(firstName + ' ' + lastName + '-edited');
    cy.findByRole('button', { name: /update contact/i }).click();

    // Verify if it was updated
    cy.get('.item-enter-done > .text-primary > :nth-child(1)').should(
      'be.visible'
    );
  });
});
