import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_warmteservice.nl_57y', ['https://www.warmteservice.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
