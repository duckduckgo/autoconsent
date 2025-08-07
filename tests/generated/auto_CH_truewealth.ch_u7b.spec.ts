import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_truewealth.ch_u7b', ['https://www.truewealth.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
