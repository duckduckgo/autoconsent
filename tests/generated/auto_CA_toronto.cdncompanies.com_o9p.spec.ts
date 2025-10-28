import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_toronto.cdncompanies.com_o9p', ['https://toronto.cdncompanies.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
