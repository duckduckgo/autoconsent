import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_munitionsdepot.ch_5ea', ['https://www.munitionsdepot.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
