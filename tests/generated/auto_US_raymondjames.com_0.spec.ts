import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_raymondjames.com_0', ['https://www.raymondjames.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
