import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_juckerfarm.ch_46v', ['https://www.juckerfarm.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
