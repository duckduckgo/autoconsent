import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ditjesendatjes.nl_0sa', ['https://www.ditjesendatjes.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
