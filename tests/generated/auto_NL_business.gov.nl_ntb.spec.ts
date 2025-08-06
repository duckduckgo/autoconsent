import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_business.gov.nl_ntb', ['https://business.gov.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
