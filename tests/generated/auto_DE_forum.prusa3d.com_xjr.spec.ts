import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forum.prusa3d.com_xjr', ['https://forum.prusa3d.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
