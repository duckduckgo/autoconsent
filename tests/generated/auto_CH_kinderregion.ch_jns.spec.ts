import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kinderregion.ch_jns', ['https://kinderregion.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
