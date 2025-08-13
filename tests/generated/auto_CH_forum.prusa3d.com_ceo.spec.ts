import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_forum.prusa3d.com_ceo', ['https://forum.prusa3d.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
