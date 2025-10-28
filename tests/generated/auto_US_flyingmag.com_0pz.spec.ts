import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_flyingmag.com_0pz', ['https://www.flyingmag.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
