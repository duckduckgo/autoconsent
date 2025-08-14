import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cyclassics-hamburg.de_m6u', ['https://www.cyclassics-hamburg.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
