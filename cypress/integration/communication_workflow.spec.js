import {webElements as workflowsPage } from '../POM/workflows_page';
import WorkflowsPage from '../POM/workflows_page';

const action = new WorkflowsPage();

describe('The user can create a Communication workflow', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce
        ('csrftoken',
        'arches');
    })

    before(() => {

        cy.visit('/');
        cy.viewport(1600,1200);
        cy.login({ username: 'RWilliams429', password: '!Ticket39' });
        cy.visit('/plugins/communication-workflow');
        cy.wait(5000);
    })

    it('Can complete each step of the Communication workflow', () => {

        cy.get('.workflow-name')
        .should('contain', 'Communication Workflow');
        cy.wait(3000);

        cy.log('**** Related Consultation/Details step ****')
        action.selectRelatedConsultation('cambridge', '26, Cambridge Road');
        action.clickCalenderBox('Communication Date');
        action.typeTextIntoField('Subject', 'Test');
        action.moveToNextStep();





    })
})