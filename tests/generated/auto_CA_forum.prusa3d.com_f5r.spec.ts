import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_forum.prusa3d.com_f5r', ['https://forum.prusa3d.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
