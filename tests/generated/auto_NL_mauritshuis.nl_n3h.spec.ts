import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mauritshuis.nl_n3h', ['https://www.mauritshuis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
