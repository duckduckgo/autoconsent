import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_littlecaesars.com_05r', ['https://littlecaesars.com/en-us/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
