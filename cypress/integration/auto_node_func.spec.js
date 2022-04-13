import FunctionManager from "../POM/function_manager";
import { webElements as funcManager } from "../POM/function_manager";
import { webElements as resourceEditor } from "../POM/resource_manager";
import ResourceManager from "../POM/resource_manager";

const action = new FunctionManager();
const resAction = new ResourceManager();

describe('Tests for the auto-populate node function', () => {

    beforeEach(() => {

        cy.visit('/graph/076f9381-7b00-11e9-8d6b-80000b44d1d9/function_manager');
        cy.viewport(1600,1200);
        Cypress.Cookies.preserveOnce
        ('csrftoken',
        'arches');
        action.loginThroughFunctionPage('RWilliams429', '!Ticket39');
    })

    // HERITAGE ASSET AUTO POPULATE NODE FUNCTION TESTS

    it('can set and use a Heritage Asset Construction Phase autopopulate node function', () => {

        cy.xpath(funcManager.autoPopNodeFunc)
        .click();
        cy.get('.pad-all')
        .should('be.visible');

        cy.log('*** Set the function ***')
        action.selectCard('Choose a card', 'Construction Phases');
        cy.wait(3000);
        action.selectNode('Choose a node', 'Phase Description');
        action.typeNameofNode("<Asset Type>, <Construction Method>, <Construction Phase Start Date>, <Construction Phase End Date>, <Construction Phase Evidence Type>, <Construction Phase Type>, <Construction Technique>, <Covering Material>, <Main Construction Material>")
        action.configureAndSave();

        cy.log('*** Test the function works ****')
        cy.visit('https://stage-keystone.historicengland.org.uk/resource/f65644a2-eb11-47c3-b819-ef8d9114600e')
        resAction.selectCard('Construction Phases');
        //cy.xpath(resourceEditor.newBtn)
        //.click();

        resAction.selectCard('Construction Phases')
        .wait(3000);
        resAction.selectFromDropDownBig('Asset Type','Agricultural Building');
        resAction.selectFromDropDownMisc('Cultural Period', 'Georgian');
        resAction.typeIntoDateField('Construction Phase Start Date', '1540');
        resAction.typeIntoDateField('Construction Phase End Date', '1541');
        resAction.selectFromDropDownSmall('Construction Phase Date Qualifier', 'Between');
        resAction.typeIntoTextField('Construction Phase Display Date', '1541');
        resAction.selectFromDropDownBig('Construction Phase Evidence Type', 'Destroyed Monument');
        resAction.selectFromDropDownBig('Main Construction Material', 'Earth Mix');
        resAction.selectFromDropDownBig('Covering Material', 'Earth Mix');
        resAction.selectFromDropDownSmall('Construction Method', 'Handbuilt');
        resAction.selectFromDropDownSmall('Construction Technique', 'Brickwork');
        resAction.selectFromDropDownSmall('Construction Phase Type', 'Construction');

        cy.xpath(resourceEditor.addBtn)
        .click();

        resAction.validateIframeText(`Agricultural Building, Handbuilt, 1540, 1541, Destroyed Monument, Construction, Brickwork, Earth Mix, Earth Mix`);

        cy.log('*** Delete the function configuration ***')
        cy.visit('/graph/076f9381-7b00-11e9-8d6b-80000b44d1d9/function_manager');
        cy.get('.rp-edit-buttons')
        .eq(7)
        .click()
        .xpath(funcManager.deleteWarning)
        .should('be.visible')
        .get('button')
        .contains('OK')
        .click()
        .get('button')
        .contains('Save Edits')
        .click()

    })

    it('@40362 can set and use a Heritage Asset Full Name autopopulate node function', () => {

        cy.xpath(funcManager.autoPopNodeFunc)
        .click();
        cy.get('.pad-all')
        .should('be.visible');

        cy.log('*** Set the function ***')
        action.selectCard('Choose a card', 'Addresses');
        cy.wait(3000);
        action.selectNode('Choose a node', 'Full Address');
        action.typeNameofNode("<Building Name Value>, <Building Number Sub-Street Value>, <Sub-Street Value>, <Building Number Value><Street Value>, <Locality Value>, <Town or City Value>, <County Value>, <Postcode Value>")
        action.configureAndSave();

        cy.visit('https://stage-keystone.historicengland.org.uk/resource/f65644a2-eb11-47c3-b819-ef8d9114600e')
        resAction.selectCard('Location Data');
        resAction.selectLocationNode('Geometry');

    })

    it('@40368 can set and use a Heritage Asset Photograph Copyright Note autopopulate node function', () => {

        cy.xpath(funcManager.autoPopNodeFunc)
        .click();
        cy.get('.pad-all')
        .should('be.visible');

        cy.log('*** Set the function ***')
        action.selectCard('Choose a card', 'Photographs');
        cy.wait(3000);
        action.selectNode('Choose a node', 'Copyright Note');
    })

    it('@40369 can set and use a Heritage Asset Use Phase Description autopopulate node function', () => {

        cy.xpath(funcManager.autoPopNodeFunc)
        .click();
        cy.get('.pad-all')
        .should('be.visible');

        cy.log('*** Set the function ***')
        action.selectCard('Choose a card', 'Use Phases');
        cy.wait(3000);
        action.selectNode('Choose a node', 'Description');
    })

    // PERSON AUTO POPULATE NODE FUNCTION TESTS

    it('@40374, @40361 can set and use a Person Full Name autopopulate node function', () => {

        cy.xpath(funcManager.autoPopNodeFunc)
        .click();
        cy.get('.pad-all')
        .should('be.visible');

        cy.log('*** Set the function ***')
        action.selectCard('Choose a card', 'Names');
        cy.wait(3000);
        action.selectNode('Choose a node', 'Full Name');
    })

    it('@40360 can set and use a Person Contact Name for Correspondence autopopulate node function', () => {

        cy.xpath(funcManager.autoPopNodeFunc)
        .click();
        cy.get('.pad-all')
        .should('be.visible');

        cy.log('*** Set the function ***')
        action.selectCard('Choose a card', 'Core');
        cy.wait(3000);
        action.selectNode('Choose a node', 'Contact Name');
    })

    // MARITIME AUTO POPULATE NODE FUNCTION TESTS

    it('@40377 can set and use Maritime Full Address autopopulate node function', () => {

        cy.xpath(funcManager.autoPopNodeFunc)
        .click();
        cy.get('.pad-all')
        .should('be.visible');

        cy.log('*** Set the function ***')
        action.selectCard('Choose a card', 'Core');
        cy.wait(3000);
        action.selectNode('Choose a node', 'Contact Name');
    })

    // ACTIVITY AUTO POPULATE NODE FUNCTION TESTS

    it('@40378 can set and use Activity Full Address autopopulate node function', () => {

        cy.xpath(funcManager.autoPopNodeFunc)
        .click();
        cy.get('.pad-all')
        .should('be.visible');

        cy.log('*** Set the function ***')
        action.selectCard('Choose a card', 'Core');
        cy.wait(3000);
        action.selectNode('Choose a node', 'Contact Name');
    })


    // PLACE AUTO POPULATE NODE FUNCTION TESTS

    it('@40371 can set and use Place Full Address autopopulate node function', () => {

        cy.xpath(funcManager.autoPopNodeFunc)
        .click();
        cy.get('.pad-all')
        .should('be.visible');

        cy.log('*** Set the function ***')
        action.selectCard('Choose a card', 'Core');
        cy.wait(3000);
        action.selectNode('Choose a node', 'Contact Name');
    })


    // CONSULTATION AUTO POPULATE NODE FUNCTION TESTS

    it('@40372 can set and use Consultation Communication Description autopopulate node function', () => {

        cy.xpath(funcManager.autoPopNodeFunc)
        .click();
        cy.get('.pad-all')
        .should('be.visible');

        cy.log('*** Set the function ***')
        action.selectCard('Choose a card', 'Core');
        cy.wait(3000);
        action.selectNode('Choose a node', 'Contact Name');
    })


})