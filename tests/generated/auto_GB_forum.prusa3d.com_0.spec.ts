import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_forum.prusa3d.com_0', ['https://forum.prusa3d.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
