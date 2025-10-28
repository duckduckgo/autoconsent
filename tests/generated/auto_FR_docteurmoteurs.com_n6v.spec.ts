import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_docteurmoteurs.com_n6v', ['https://docteurmoteurs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
