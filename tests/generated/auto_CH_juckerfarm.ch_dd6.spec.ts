import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_juckerfarm.ch_dd6', ['https://www.juckerfarm.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
