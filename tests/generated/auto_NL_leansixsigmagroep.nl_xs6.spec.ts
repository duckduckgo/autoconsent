import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_leansixsigmagroep.nl_xs6', ['https://leansixsigmagroep.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
