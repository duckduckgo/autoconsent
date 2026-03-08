import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_barbasbellfires.com_hfm', ['https://barbas.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
