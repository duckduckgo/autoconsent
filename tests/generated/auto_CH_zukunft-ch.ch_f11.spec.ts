import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zukunft-ch.ch_f11', ['https://www.zukunft-ch.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
