import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_promoalert.com_z1w', ['https://www.promoalert.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
