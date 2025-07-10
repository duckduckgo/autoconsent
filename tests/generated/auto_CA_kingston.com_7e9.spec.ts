import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_kingston.com_7e9', ['https://www.kingston.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
