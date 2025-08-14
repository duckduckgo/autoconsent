import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kinderregion.ch_meq', ['https://kinderregion.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
