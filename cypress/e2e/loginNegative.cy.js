

describe('PPL Test Case', () => {


    it('Login password salah', () => {

        Cypress.on('window:before:load', (win) => {
            cy.spy(win.console, 'error');
          });

        cy.visit('http://localhost:3000/')
        cy.contains('Login').click()
        cy.get('input[name=username]').type('admin')
        cy.get('input[name=password]').type('123')
        cy.get('button[type=submit]').as('Masuk').click()

        cy.window().then((win) => {
            expect(win.console.error).to.have.callCount(2);
        });
    })  
})