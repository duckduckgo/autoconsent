import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aargauersport.ch_qm6', ['https://aargauersport.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
