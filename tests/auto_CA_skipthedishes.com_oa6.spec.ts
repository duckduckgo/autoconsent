import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_skipthedishes.com_oa6', ['https://www.skipthedishes.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
