import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sneeuwkettingenwinkel.nl_1c8', ['https://www.sneeuwkettingenwinkel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
