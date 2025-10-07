import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_forum.prusa3d.com_txz', ['https://forum.prusa3d.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
