import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_business.gov.nl_kqx', ['https://business.gov.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
