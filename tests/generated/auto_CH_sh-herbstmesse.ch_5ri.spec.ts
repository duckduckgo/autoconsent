import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sh-herbstmesse.ch_5ri', ['https://sh-herbstmesse.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
