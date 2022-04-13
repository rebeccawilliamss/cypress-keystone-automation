import {webElements as workflowsPage } from '../POM/workflows_page';
import WorkflowsPage from '../POM/workflows_page';

const action = new WorkflowsPage();

describe('The user can create a Consultation workflow', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce
        ('csrftoken',
        'arches');
    })

    before(() => {

        cy.visit('/');
        cy.viewport(1600,1200);
        cy.login({ username: 'RWilliams429', password: '!Ticket39' });
        cy.visit('/plugins/consultation-workflow');
        cy.wait(5000);
    })

    it('can complete each step of the Consultation workflow', () => {

        cy.log('**** Consultation GeoJSON step ****')
        cy.get(workflowsPage.workflowSidePanel)
        .should('be.visible');
        cy.wait(5000);
        action.typeIntoFieldAndSelectOption('Related Application Area', 'The Hop Exchange', 'The Hop Exchange 24, Southwark Street, Southbank, London, Greater London, SE1 1TY');
        action.verifyValueHasbeenSelected('The Hop Exchange 24, Southwark Street, Southbank, London, Greater London, SE1 1TY');
        //action.clickDropDownFieldAndSelectValueOther('Feature Shape', 'Area');
        action.moveToNextStep();

        cy.log('**** Consultation Dates step ****')
        action.clickCalenderBox('Log Date');
        action.verifyTargetDate('Target Date');
        action.moveToNextStep();

        cy.log('**** Consultation details/type step ****')
        //action.selectRadioButton('Consultation Type', 'aa300ced-4a3c-4f14-b285-fc203910a374');
        action.clickDropDownFieldAndSelectValueOther('Application Type', 'Advertisement Consent');
        action.clickDropDownFieldAndSelectValueOther('Development Type', 'Agricultural development');
        //action.selectRadioButton('Contested Heritage?', '4877dda1-af20-46e1-9782-6844575f9ab6');
        action.moveToNextStep();

        cy.log('**** Reference Numbers Step ****')
        action.typeTextIntoField('Reference', '12345');
        action.clickDropDownFieldAndSelectValueOther('Reference Type', 'External reference')
        action.clickDropDownFieldAndSelectValue('Agency', 'Adam Single')
        cy.xpath(workflowsPage.addBtn).click();

        action.typeTextIntoField('Reference', '24680');
        action.clickDropDownFieldAndSelectValueOther('Reference Type', 'Planning reference')
        action.clickDropDownFieldAndSelectValue('Agency', 'Bilbo Baggins')
        cy.xpath(workflowsPage.addBtn).click();

        cy.get('.wf-step-multi-tile-container').within(($el) => {

            for(let i = 0; i < $el.length; i++) {
                expect($el[i].textContent).to.contain('24680');
                expect($el[i].textContent).to.contain('Planning reference');
                //expect($el[i].textContent).to.contain('Bilbo Baggins');
                expect($el[i].textContent).to.contain('12345');
                expect($el[i].textContent).to.contain('External reference');
                expect($el[i].textContent).to.contain('Adam Single');
            }
        })

        action.moveToNextStep();

        cy.log('**** Application Proposal step ****')
        action.interactWithIframe('This is a test')
        action.typeIntoFieldAndSelectOption('Associated Proposal File(s)', 'All About Ye', 'All About Ye Olde Cheshire Cheese');
        action.moveToNextStep();

        cy.log('**** Contacts step ****')
        action.clickDropDownFieldAndSelectValue('Planning Officer', 'Bilbo Baggins')
        action.clickDropDownFieldAndSelectValue('Casework Officer', 'Adam Single')
        action.clickDropDownFieldAndSelectValue('Agent', 'Marina Lai')
        action.clickDropDownFieldAndSelectValue('Owner', 'Bilbo Baggins')
        action.clickDropDownFieldAndSelectValue('Applicant', 'Matthew Robinson')
        action.moveToNextStep();

        // cy.log('**** Verify the summary information is correct ****')
        // cy.xpath(workflowsPage.consultationSummary).within(($el) => {

        //     for(let i = 0; i < $el.length; i++) {
        //         //expect($el[i]).to.contain()
        //         expect($el[i].textContent).to.contain('The Hop Exchange 24, Southwark Street, Southbank, London, Greater London, SE1 1TY')
        //     }
        // })

        action.deleteWorkflow();

    })
})
