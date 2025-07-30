import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_business.gov.nl_w7k', ['https://business.gov.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
