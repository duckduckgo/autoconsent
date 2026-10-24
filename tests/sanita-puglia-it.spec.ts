import generateCMPTests from '../playwright/runner';

generateCMPTests('sanita-puglia-it', ['https://sanita.puglia.it/'], {
    onlyRegions: ['IT'], // the site does not respond outside Italy
    testSelfTest: false, // the page reloads as soon as consent is stored
});
