import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_infinitecampus.com_4yd', ['https://www.infinitecampus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
