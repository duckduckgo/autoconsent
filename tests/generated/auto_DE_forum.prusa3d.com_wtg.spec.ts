import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forum.prusa3d.com_wtg', ['https://forum.prusa3d.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
