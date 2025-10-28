import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cbinsights.com_l7u', ['https://www.cbinsights.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
