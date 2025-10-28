import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reisemedizin.uzh.ch_59l', ['https://reisemedizin.uzh.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
