import generateCMPTests from '../playwright/runner';

generateCMPTests('cookieconsent3', [
    'https://playground.cookieconsent.orestbida.com/',
    'https://www.epravo.cz/',
    'https://www.seroundtable.com/',
]);

// CCPA notice with an opt-out link instead of buttons
generateCMPTests('cookieconsent3', ['https://www.cinemark.com/'], {
    onlyRegions: ['US'],
});

// preferences modal without a reject button, consent stored under a custom cookie name
generateCMPTests('cookieconsent3', ['https://www.world-nuclear.org/'], {
    testSelfTest: false,
});

// banner with a single accept button, hidden instead
generateCMPTests('cookieconsent3', ['https://www.buildzoom.com/', 'https://www.lu.ch/'], {
    testSelfTest: false,
});
