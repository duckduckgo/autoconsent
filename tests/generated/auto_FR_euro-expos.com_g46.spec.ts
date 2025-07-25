import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_euro-expos.com_g46', ['https://www.euro-expos.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
