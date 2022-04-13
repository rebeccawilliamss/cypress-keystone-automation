class ResourceManager {

    constructor(){
    }

    selectCard(card) {
        return cy.xpath(`(//div[@class="resource-editor-tree"]/ul/li)[1]/ul/li/a/span[text()='${card}']/..`)
        .click();
    }

    selectFromDropDownBig(label, option) {
        return cy.xpath(`//label[contains(text(), '${label}')]/../div/div/ul`)
        .click()
        .xpath(`//ul[@class='select2-results']//li/div[contains(text(), '${option}')]`)
        .click()
    }

    selectFromDropDownSmall(label, option) {
        return cy.xpath(`//label[text()='${label}']/../div/div/a/span/b`)
        .click()
        .xpath(`//ul[@class='select2-results']//li/div[contains(text(), '${option}')]`)
        .click()
    }

    selectFromDropDownMisc(label, option) {
        return cy.xpath(`//label[text()='${label}']/../div/div/div/a/span/b`)
        .click()
        .xpath(`//ul[@class='select2-results']//li/div[contains(text(), '${option}')]`)
        .click()
    }

    typeIntoTextField(label, text) {
        return cy.xpath(`//label[text()='${label}']/../div/input`)
        .type(text);
    }

    typeIntoDateField(label, text) {
        return cy.xpath(`//label[text()='${label}']/../div/div/input`)
        .type(text)
    }

    validateIframeText(text) {
        cy.get('iframe')
        .its('0.contentDocument')
        .its('body')
        .should('contain', text)
    }

    getTextFromInput(label) {
        return cy
          .get("label")
          .contains(label)
          .parent()
          .find("input")
          .invoke("val")
          .contains(label)
    }

    deleteTestRecord() {
        return cy.xpath(`//a[@id='menu-control']`)
        .click()
        .xpath(`//a[@data-bind='click: deleteResource']`)
        .click()
        .xpath(`//button[contains(text(), 'OK')]`)
        .click()
        .url()
        .should('eq', 'https://stage-keystone.historicengland.org.uk/resource')
    }


}

const webElements = {
    createAssetResource: `(//a[contains(text(), 'Create Resource')])[9]`,
    topLevelCard: `//div[@class='resource-editor-tree']/ul/li/a/strong/span[contains(text(), 'Heritage Asset')]`,
    newBtn: `//button[contains(text(), 'New')]`,
    addBtn: `//button[contains(text(), 'Add')]`

}

export default ResourceManager;
export {webElements};