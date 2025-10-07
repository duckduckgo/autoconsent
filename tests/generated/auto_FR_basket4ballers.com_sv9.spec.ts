import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_basket4ballers.com_sv9', ['https://www.basket4ballers.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
