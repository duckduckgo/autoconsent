import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_harlingenwelkomaanzee.nl_2pa', ['https://www.harlingenwelkomaanzee.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
