import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_app.truewealth.ch_lum', ['https://app.truewealth.ch/app/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
