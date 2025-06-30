import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_blinkforhome.com_oy2', ['https://blinkforhome.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
