class FunctionManager {

    constructor(){
    }

    loginThroughFunctionPage(username, password) {
        return cy
        .xpath(`//input[@name="username"]`)
        .type(username)
        .xpath(`//input[@name="password"]`)
        .type(password)
        .xpath(`//button[@type="submit"]`)
        .click()
    }

    selectCard(label, card) {
        return cy
        .xpath(`//label[text()='${label}']/../div/a/div/b`)
        .click()
        .xpath(`//ul[@class='chosen-results']/li[text()='${card}']`)
        .click()
    }

    selectNode(label, node) {
        return cy
        .xpath(`//label[text()='${label}']/../div/a/div/b`)
        .click()
        .xpath(`//ul[@class='chosen-results']//li[contains(text(), '${node}')]`)
        .click()
    }

    selectLocationNode(node) {
        return cy.xpath(`//h4//span[contains(text(), '${node}')]`)
        .click()
    }

    typeNameofNode(text) {
        return cy
        .xpath(`//input[@id='fnc_ap_nodename']`)
        .type(text)
    }

    configureAndSave() {
        return cy
        .xpath(`//button[contains(text(), 'Add/Amend Current Configuration')]`)
        .click()
        .xpath(`//button[contains(text(), 'Save')]`)
        .click();
    }

    validateTheFunction(label, text){
        return cy.xpath(``)
    }


}

const webElements = {
    autoPopNodeFunc: `//a[@class='listitem_name' and text()='Auto-populate Node From Card Nodes']`,
    deleteWarning: `.card-alert-panel`

}

export default FunctionManager;
export {webElements};

