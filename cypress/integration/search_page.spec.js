import { webElements as homePage } from '../POM/home_page';
import { webElements as searchPage } from '../POM/search_page';

/// const path = require('path')
// const fs = require('fs');

describe('Testing the functionality of the Keystone search page', () => {

    beforeEach(() => {

        cy.visit('/')
        cy.viewport(1600,1200)
        Cypress.Cookies.preserveOnce
        ('csrftoken',
        'arches');
    })

    it('the search export button is not visible for anon users', () => {

        cy.xpath(homePage.findBtn)
        .click();
        cy.url()
        .should('contain', '/search')

        cy.xpath(searchPage.searchExportBtn)
        .should('not.exist')
    })

    it('the search export button is visible for logged in users', () => {

        cy.login({ username: 'RWilliams429', password: '!Ticket39' })

        cy.xpath(homePage.findBtn)
        .click();
        cy.url()
        .should('contain', '/search')

        cy.xpath(searchPage.searchExportBtn)
        .should('exist')
        .click()
        cy.xpath(searchPage.searchExportPanel)
        .should('be.visible')
    })

    it('can export filtered search results', () => {

        cy.xpath(homePage.findBtn)
        .click()

        cy.xpath(searchPage.resourceTypeBtn)
        .click()
        .xpath(searchPage.selectArtefact)
        .click()

        cy.xpath(searchPage.resourceChoice)
        .should('be.visible')

        cy.xpath(searchPage.searchExportBtn)
        .click()
        cy.xpath(searchPage.searchExportPanel)
        .should('be.visible')

        cy.get(`[type='radio']`)
        .first()
        .check({force: true})

        cy.get('button')
        .contains(' Download ')
        // .click()

        // const downloadsFolder = Cypress.config('downloadsFolder')
        // let fileName
        // cy.task("downloadsFile", downloadsFolder).then((result) => {
        //     fileName = result
        //     cy.log(result)
        //     cy.log(fileName)
        //     const filePath = path.join(downloadsFolder, fileName)
        //     cy.log(filePath)
        //     cy.readFile(filePath).should('exist')

        //     cy.task("readFile", filePath).then((result2) => {
        //         cy.log(result2).should('contain', '')
        //     })
        // })

    })
})