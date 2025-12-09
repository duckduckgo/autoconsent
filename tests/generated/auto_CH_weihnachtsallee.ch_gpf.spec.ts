import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_weihnachtsallee.ch_gpf', ['https://www.weihnachtsallee.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
