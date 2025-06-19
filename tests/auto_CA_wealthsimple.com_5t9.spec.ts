import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_wealthsimple.com_5t9', ['https://www.wealthsimple.com/en-ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
