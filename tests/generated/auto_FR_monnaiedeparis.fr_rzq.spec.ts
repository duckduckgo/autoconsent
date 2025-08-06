import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monnaiedeparis.fr_rzq', ['https://www.monnaiedeparis.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
