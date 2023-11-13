/*eslint-disable*/
// import variables
import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'

// variables object literal
 export const props = {
    search: {
        dataHeaderSearch: document.querySelector('[data-header-search]'),
        searchCancelButton: document.querySelector('[data-search-cancel]'),
        dataSearchGenres: document.querySelector('[data-search-genres]'),
        dataSearchAuthors: document.querySelector('[data-search-authors]'),
        dataSearchOverlay: document.querySelector('[data-search-overlay]'),
        dataSearchTitle: document.querySelector('[data-search-title]'),
        dataSearchForm: document.querySelector('[data-search-form]'),
        searchButton: document.querySelector('[form="search"]'),
    },

    settings: {
        dataHeaderSettings: document.querySelector('[data-header-settings]'),
        settingsCancelButton: document.querySelector('[data-settings-cancel]'),
        dataSettingsTheme: document.querySelector('[data-settings-theme]'),
        dataSettingsOverlay: document.querySelector('[data-settings-overlay]'),
        settingSaveButton: document.querySelector('[form="settings"]')
    },

    mainListing: {
        dataListItems: document.querySelector('[data-list-items]'),
        dataListButton: document.querySelector('[data-list-button]'),
        dataListMessage: document.querySelector('[data-list-message]'),
        dataListActive: document.querySelector('[data-list-active]'),
        dataListBlur: document.querySelector('[data-list-blur]'),
        dataListImage: document.querySelector('[data-list-image]'),
        dataListTitle: document.querySelector('[data-list-title]'),
        dataListSubtitle: document.querySelector('[data-list-subtitle]'),
        dataListDescription: document.querySelector('[data-list-description]'),
        activeCloseOverlay: document.querySelector('[data-list-close]')
    },

    library: {
        books,
        authors,
        genres,
        BOOKS_PER_PAGE,
    }
}

// Theme variables 
export const css = {
    day: {
        dark: '10, 10, 20',
        light: '255, 255, 255',
    },
    night: {
        dark: '255, 255, 255',
        light: '10, 10, 20',
    },
};