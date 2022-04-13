class SearchPage {

}

const webElements = {
    resourceTypeBtn: `//div[@class='resource-selector-button pull-right']//button[contains(text(), ' Resource Type ')]`,
    selectArtefact: `//a[contains(text(), 'Artefact')]`,
    resourceChoice: `//ul[@class='select2-choices']//span[contains(text(), 'Artefact')]`,
    searchExportBtn: `//button[@class='saved-search-container search-type-btn-popup relative'][3]`,
    searchExportPanel: `//div[@class='search-export']`,
    searchExportOptions: `(//div)[246]`,
    exportRadioBtns: `//input[@type='radio']`
}

export{webElements};