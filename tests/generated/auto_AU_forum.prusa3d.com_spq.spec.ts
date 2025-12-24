import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_forum.prusa3d.com_spq', ['https://forum.prusa3d.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
