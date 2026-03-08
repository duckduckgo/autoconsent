import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_danskebank.se_lyq', ['https://danskebank.se/privat'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
