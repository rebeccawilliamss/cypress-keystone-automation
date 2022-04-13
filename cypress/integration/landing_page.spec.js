describe('Test navigation links take users to correct page', () => {

    beforeEach(() => {

        cy.visit('/')
        cy.viewport(1600,1200)
        Cypress.Cookies.preserveOnce
        ('csrftoken',
        'arches');
    })

    it('Can visit each nav link before logging in', () => {

        cy.get('.nav-container')
        .children()
        .should('have.length', 2)

        const links = ['Find', 'Login']

        links.forEach(link => {
            cy.contains(link)
            .then((link) => {
                cy.request(link.prop('href'))
                .its('status')
                .should('eq', 200)
            })
        })
    })

    it('Can visit each nav link after logging in', () => {

        cy.login({ username: 'RWilliams429', password: '!Ticket39' })

        cy.get('.navbar-nav')
        .children()
        .should('have.length', 7)

        const links = ['Active', 'New', 'Find', 'Manage', 'Graphs', ' Welcome, Rebecca ','(logoff)']

        links.forEach(link => {
            cy.contains(link)
            .then((link) => {
                cy.request(link.prop('href'))
                .its('status')
                .should('eq', 200)
            })
        })
    })
})