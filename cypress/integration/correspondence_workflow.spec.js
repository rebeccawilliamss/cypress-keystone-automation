import {webElements as workflowsPage } from '../POM/workflows_page';
import WorkflowsPage from '../POM/workflows_page';

const action = new WorkflowsPage();

describe('The user can create a Correspondence workflow', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce
        ('csrftoken',
        'arches');
    })

    before(() => {

        cy.visit('/');
        cy.viewport(1600,1200);
        cy.login({ username: 'RWilliams429', password: '!Ticket39' });
        cy.visit('/plugins/correspondence-workflow');
        cy.wait(5000);
    })

    it('Can complete each step of the Correspondence workflow', () => {

        cy.get('.workflow-name')
        .should('contain', 'Correspondence Workflow');
        cy.wait(3000)

        cy.log('**** Select related Consultation step ****')
        action.selectRelatedConsultation('cambridge', '26, Cambridge Road');
        action.clickDropDownFieldAndSelectValueOther('Letter Type', 'Letter A2 - No need to consult');
        action.moveToNextStep();

        cy.log('**** validate the workflow summary ****')
        cy.get('.final-step').within(($el) => {
            for (let i = 0; i < $el.length; i++) {
                expect($el[i].textContent).to.contain('Consultation for    KT1 3JY 26, Cambridge Road, Kingston Upon Thames, KT1 3JY on 2019-02-06 (Consultation Resource Instance)')
                expect($el[i].textContent).to.contain('Letter A2 - No need to consult')
                expect($el[i].textContent).to.contain('Download Letter')
            }
        })

        action.deleteWorkflow();

        // cy.log('**** user can download the letter ****')
        // cy.xpath(workflowsPage.letterDownloadLink).click();

        // const downloadsFolder = Cypress.config('downloadsFolder');
        // let fileName
        // cy.task("downloadFile", downloadsFolder).then((result) => {
        //     fileName = result
        //     cy.log(result)
        //     cy.log(fileName)
        //     const filePath = path.join(downloadsFolder, fileName);
        //     cy.log(filePath)
        //     cy.readFile(filePath).should('exist');

        //     cy.task("readFile", filePath).then((result2) => {
        //         cy.log(result2).should('contain', 'Karen Coles')
        //         })
        // })

    })
})