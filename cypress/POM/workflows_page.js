class WorkflowsPage {

    constructor(){
    }

    selectWorkflowType(workflow) {
        return cy.xpath(`//h4[contains(text(), '${workflow}')]`)
        .click();
    }

    moveToNextStep() {
        return cy.xpath(`//button/span[contains(text(), 'Save and Continue')]`)
        .click();
    }

    typeTextIntoField(label, text) {
        return cy.xpath(`//label[contains(text(), '${label}')]/../div/input[@placeholder='Enter text']`)
        .type(text);
    }

    typeIntoFieldAndSelectOption(label, text, option) {
        return cy.xpath(`//label[contains(text(), '${label}')]/../div/div/div/a/span/b`)
        .click()
        .xpath(`(//div[@class='select2-search']//label[@class='select2-offscreen']/../input)[3]`)
        .type(text)
        .xpath(`//div[@class='select2-result-label'][contains(text(), '${option}')]`)
        .click();
    }

    clickDropDownFieldAndSelectValue(label, value) {
        return cy.xpath(`//label[contains(text(), '${label}')]/../div/div/div/a/span/b`)
        .click()
        .xpath(`//div[@class='select2-result-label'][contains(text(), '${value}')]`)
        .click();
    }

    clickDropDownFieldAndSelectValueOther(label, value) {
        return cy.xpath(`//label[contains(text(), '${label}')]/../div/div/a/span/b`)
        .click()
        .xpath(`//div[@class='select2-result-label'][contains(text(), '${value}')]`)
        .click();
    }

    selectRelatedConsultation(text, option) {
        return cy.xpath(`//span[contains(text(), 'Add new Relationship')]/../span/b`)
        .click()
        .xpath(`//div[@class='select2-search']//input`)
        .type(text)
        .xpath(`//div[@class='select2-result-label'][contains(text(), '${option}')]`)
        .click();
    }

    verifyValueHasbeenSelected(value) {
        return cy.xpath(`//div[@class='rr-table-instance-label']/span[contains(text(), '${value}')]`)
        .should('be.visible');
    }

    clickCalenderBox(field) {
        return cy.xpath(`//label[contains(text(), '${field}')]/../div/div/div/input`)
        .click()
        .type('{esc}');
    }

    verifyTargetDate(label) {

        return cy.xpath(`//label[contains(text(), '${label}')]/../div/div/div/input`)
        .invoke('val')
        .then((text) => {
            let date = new Date();
            let targetDate = new Date(date.getFullYear(),date.getMonth(),date.getDate()+22)
            .toISOString().slice(0, 10);
            expect(targetDate).to.equal(text);
        })
    }

    selectRadioButton(label, value) {
        return cy.xpath(`//label[contains(text(), '${label}')]`)
        .within(() => {
            cy.xpath(`//input[@type='radio']`)
            .first()
            .check();

        })
    }

    interactWithIframe(text) {
       return cy.get('iframe')
        .its('0.contentDocument')
        .its('body')
        .type(text);

    }

    deleteWorkflow() {
        return cy.xpath(`//button//span[contains(text(), 'Delete')]`)
        .click()
        .xpath(`//button[contains(text(), 'OK')]`)
        .click()
    }

}

const webElements = {
    referenceNumbersInput: `//label[contains(text(), 'Reference')]/../div/input[@placeholder='Enter text']`,
    workflowSidePanel: '.workbench-card-sidepanel',
    addBtn: `//button[@class='btn btn-workflow-tile btn-success']`,
    consultationSummary: '.workflow-component-based-step-wrapper',

    letterDownloadLink: `//h5[contains(text(), 'Download Letter')]/../div/div/div/a`
}

export default WorkflowsPage;
export {webElements};