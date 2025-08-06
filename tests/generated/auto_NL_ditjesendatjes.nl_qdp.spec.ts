import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ditjesendatjes.nl_qdp', ['https://www.ditjesendatjes.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
