import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_compassioncrossing.info_3dj', ['https://compassioncrossing.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
