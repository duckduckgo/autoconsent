import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_business.gov.nl_d1y', ['https://business.gov.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
