import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_meilleurtest.fr_pqo', ['https://meilleurtest.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
