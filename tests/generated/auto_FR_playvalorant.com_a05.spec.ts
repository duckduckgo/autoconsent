import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_playvalorant.com_a05', ['https://playvalorant.com/fr-fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
