import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rockwool.com_w3u', ['https://www.rockwool.com/north-america/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
