import generateCMPTests from '../playwright/runner';

generateCMPTests('setupad', [
    'https://www.filmsite.org/boxoffice.html',
    'https://ezgif.com/',
    'https://pdfresizer.com/',
    // no "Reject all" button, opt-out goes through the settings screen
    'https://www.fakenamegenerator.com/',
    'https://www.worlddata.info/',
]);
