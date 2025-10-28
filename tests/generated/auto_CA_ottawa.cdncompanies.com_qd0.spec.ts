import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ottawa.cdncompanies.com_qd0', ['https://ottawa.cdncompanies.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
