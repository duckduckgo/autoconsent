import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rheinfelden.ch_4hp', ['https://www.rheinfelden.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
