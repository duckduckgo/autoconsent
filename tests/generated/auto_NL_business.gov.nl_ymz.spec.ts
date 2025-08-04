import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_business.gov.nl_ymz', ['https://business.gov.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
