/// <reference types="cypress" />
import { webElements as loginPage } from '../POM/login_page'
import { webElements as homePage } from '../POM/home_page'

describe('Login functionality', () => {

    beforeEach(() => {

        Cypress.Cookies.preserveOnce('csrftoken',
        'arches');
        cy.viewport(1600,1200);
    })

    before(() => {

        cy.visit('/');
    })


    it('displays an error message when logging in with invalid credentials', () => {

        cy.login({ username: 'admin', password: 'admin'});

        cy.get('#login-failed-alert').should('be.visible').and('contain', 'Login failed');
    })

    it('can login using valid credentials', () => {

        cy.login({ username: 'RWilliams429', password: '!Ticket39'});
    })

});