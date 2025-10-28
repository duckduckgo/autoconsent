import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_forum.prusa3d.com_0', ['https://forum.prusa3d.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
