import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cafetheaterfestival.nl_txb', ['https://cafetheaterfestival.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
