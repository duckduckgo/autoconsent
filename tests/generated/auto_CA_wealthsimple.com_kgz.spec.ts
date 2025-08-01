import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_wealthsimple.com_kgz', ['https://www.wealthsimple.com/en-ca'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
