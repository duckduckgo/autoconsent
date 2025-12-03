import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_magazines-motivatie.nl_6o1', ['https://magazines-motivatie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
