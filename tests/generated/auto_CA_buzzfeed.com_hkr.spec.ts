import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_buzzfeed.com_hkr', ['https://www.buzzfeed.com/ca'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
