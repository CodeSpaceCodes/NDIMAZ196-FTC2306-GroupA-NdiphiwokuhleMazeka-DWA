/*eslint-disable*/

// import variables
import { 
    books, 
    authors, 
    genres,
    BOOKS_PER_PAGE } from './data.js'

// Import props from props
import { props } from './props.js';

// Import handlers from handler.js
import {
    defaultTheme, 
    bookPreview, 
    findRemainingBooks, 
    reviewBook, 
    searchSubmit, 
    saveSettings, 
    closeReviewBook, 
    showSearchOverlay, 
    closeSearchOverlay, 
    showSettingsOverlay,
    closeSettingsOverlay,
} from './handlers.js';

// global scope variableS
let PAGE = 1;
let REMAINING_BOOKS = props.library.books.length - props.library.BOOKS_PER_PAGE * PAGE;
let BOOK_SLICE_START_INDEX = 0;

// logic

defaultTheme();

bookPreview(props.library.books.slice(BOOK_SLICE_START_INDEX, props.library.BOOKS_PER_PAGE));

props.mainListing.dataListButton.innerHTML = `Show more ${REMAINING_BOOKS}`;

props.mainListing.dataListButton.addEventListener('click', findRemainingBooks);

props.mainListing.dataListItems.addEventListener('click', reviewBook);

props.mainListing.activeCloseOverlay.addEventListener('click', closeReviewBook);

props.search.dataHeaderSearch.addEventListener('click', showSearchOverlay);

props.search.searchCancelButton.addEventListener('click', closeSearchOverlay);

props.search.searchButton.addEventListener('click', searchSubmit);

props.settings.dataHeaderSettings.addEventListener('click', showSettingsOverlay);

props.settings.settingSaveButton.addEventListener('click', saveSettings);

props.settings.settingsCancelButton.addEventListener('click', closeSettingsOverlay);