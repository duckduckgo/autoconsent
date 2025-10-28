import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_psychologie.ch_peq', ['https://www.psychologie.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
