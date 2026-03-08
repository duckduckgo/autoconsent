import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_computeruitleg.nl_trq', ['https://computeruitleg.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
