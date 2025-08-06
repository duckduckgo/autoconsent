import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_truewealth.ch_76k', ['https://www.truewealth.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
