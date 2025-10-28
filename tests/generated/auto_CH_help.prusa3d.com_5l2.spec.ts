import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_help.prusa3d.com_5l2', ['https://help.prusa3d.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
