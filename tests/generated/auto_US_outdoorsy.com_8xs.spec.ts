import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_outdoorsy.com_8xs', ['https://www.outdoorsy.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
