import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.spartan.com_f2d', ['https://fr.spartan.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
