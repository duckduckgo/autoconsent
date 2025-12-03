import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_truewealth.ch_gox', ['https://www.truewealth.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
