import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.whileint.com_ojn', ['https://fr.whileint.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
