import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_9-1-1.fandom.com_dz8', ['https://9-1-1.fandom.com/wiki/9-1-1_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
