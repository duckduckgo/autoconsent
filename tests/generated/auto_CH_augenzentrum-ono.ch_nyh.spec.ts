import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_augenzentrum-ono.ch_nyh', ['https://www.augenzentrum-ono.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
