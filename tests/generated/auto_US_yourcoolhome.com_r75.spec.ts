import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_yourcoolhome.com_r75', ['https://yourcoolhome.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
