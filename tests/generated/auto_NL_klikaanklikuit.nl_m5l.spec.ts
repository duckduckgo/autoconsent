import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_klikaanklikuit.nl_m5l', ['https://klikaanklikuit.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
