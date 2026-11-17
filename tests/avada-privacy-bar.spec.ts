import generateCMPTests from '../playwright/runner';

generateCMPTests('avada-privacy-bar', [
    'https://www.levigo.de/',
    // No reject button, consent checkboxes only
    'https://www.bai.org/',
]);

// The page reloads after the reject click, so the self-test never runs
generateCMPTests('avada-privacy-bar', ['https://www.ccscollect.co.uk/', 'https://comcavi.it/'], {
    testSelfTest: false,
});
