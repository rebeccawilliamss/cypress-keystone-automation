import { webElements as loginPage } from '../POM/login_page'
import { webElements as homePage } from '../POM/home_page'

Cypress.Commands.add('login', (user) => {

    cy.xpath(homePage.loginBtn).click();
    cy.xpath(loginPage.username).type(user.username);
    cy.xpath(loginPage.password).type(user.password);
    cy.get('button').contains('Sign In').click().wait(2000);

    cy.log('********** verify sign in was successful **********')
    cy.xpath(homePage.logOutBtn).should('be.visible');
})

