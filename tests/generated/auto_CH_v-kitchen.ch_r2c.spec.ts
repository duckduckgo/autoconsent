import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_v-kitchen.ch_r2c', ['https://www.v-kitchen.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
