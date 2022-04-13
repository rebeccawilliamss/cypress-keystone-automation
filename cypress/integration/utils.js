
// Delete downloads folder before each search export test
export const deleteDownloadsFolder = () => {
    const downloadsFolder = Cypress.config('downloadsFolder')

    cy.task('deleteFolder', downloadsFolder)
  }