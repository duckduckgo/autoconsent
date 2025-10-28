import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_human-immobilier.fr_0c3', ['https://www.human-immobilier.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
