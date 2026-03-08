import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr-fr.bakker.com_ojr', ['https://fr-fr.bakker.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
