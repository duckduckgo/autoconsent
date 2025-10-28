import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_actionlogement.fr_prz', ['https://www.actionlogement.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
