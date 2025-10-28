import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_promo-conso.net_d7a', ['https://www.promo-conso.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
