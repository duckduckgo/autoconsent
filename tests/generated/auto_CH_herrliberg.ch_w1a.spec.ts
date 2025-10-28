import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_herrliberg.ch_w1a', ['https://www.herrliberg.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
