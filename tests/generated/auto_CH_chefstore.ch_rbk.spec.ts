import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chefstore.ch_rbk', ['https://chefstore.ch/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
