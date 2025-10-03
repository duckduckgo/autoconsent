import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_blinkforhome.com_bk2', ['https://blinkforhome.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
