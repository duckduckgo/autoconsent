import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_assistance.bouyguestelecom.fr_m6m', ['https://www.assistance.bouyguestelecom.fr/s/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
