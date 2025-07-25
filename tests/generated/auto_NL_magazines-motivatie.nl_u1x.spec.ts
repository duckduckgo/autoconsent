import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_magazines-motivatie.nl_u1x', ['https://magazines-motivatie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
