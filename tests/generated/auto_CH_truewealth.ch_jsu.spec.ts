import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_truewealth.ch_jsu', ['https://www.truewealth.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
