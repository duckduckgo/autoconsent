import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_harlingenwelkomaanzee.nl_9im', ['https://www.harlingenwelkomaanzee.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
