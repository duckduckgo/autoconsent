import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_juckerfarm.ch_r8n', ['https://www.juckerfarm.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
