import { webElements as resManager } from '../POM/resource_manager';
import ResourceManager from "../POM/resource_manager";

const resourceManager = new ResourceManager();

describe('Tests for custom functions in the resource eidtor', () => {

    beforeEach(() => {

        cy.visit('/resource')
        cy.viewport(1600,1200)
        Cypress.Cookies.preserveOnce
        ('csrftoken',
        'arches');
    })

    it('@39947 Heritage Asset record auto generates a Primary Reference Number', () => {

        cy.xpath(resManager.createAssetResource)
        .click();

        cy.xpath(resManager.topLevelCard)
        .should('be.visible')

        resourceManager.selectCard('Heritage Asset Names');
        resourceManager.typeIntoField('Name', 'Test Heritage Asset');
        cy.xpath(resManager.addBtn).click();
        cy.reload();

        cy.selectCard('System Reference Numbers');
        resourceManager.getTextFromInput('Primary Reference Number')

        resourceManager.deleteTestRecord();

    })

    it('@39939 Activity record auto generates a Primary Reference Number', () => {

        cy.xpath(resManager.createAssetResource)
        .click();

        cy.xpath(resManager.topLevelCard)
        .should('be.visible')

        resourceManager.selectCard('Activity Names');
        resourceManager.typeIntoField('Name', 'Test Heritage Asset');
        cy.xpath(resManager.addBtn).click();
        cy.reload();

        cy.selectCard('System Reference Numbers');
        resourceManager.getTextFromInput('Primary Reference Number')

        resourceManager.deleteTestRecord();

    })

    it('Maritime Vessel record auto generates a Primary Reference Number', () => {

        cy.xpath(resManager.createAssetResource)
        .click();

        cy.xpath(resManager.topLevelCard)
        .should('be.visible')

        resourceManager.selectCard('Vessel Names');
        resourceManager.typeIntoField('Name', 'Test Heritage Asset');
        cy.xpath(resManager.addBtn).click();
        cy.reload();

        cy.selectCard('System Reference Numbers');
        resourceManager.getTextFromInput('Primary Reference Number')

        resourceManager.deleteTestRecord();

    })

})