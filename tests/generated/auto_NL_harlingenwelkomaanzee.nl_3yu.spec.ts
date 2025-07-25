import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_harlingenwelkomaanzee.nl_3yu', ['https://www.harlingenwelkomaanzee.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
