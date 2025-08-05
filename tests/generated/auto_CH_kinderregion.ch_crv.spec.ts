import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kinderregion.ch_crv', ['https://kinderregion.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
