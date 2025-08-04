import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_business.gov.nl_a7i', ['https://business.gov.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
