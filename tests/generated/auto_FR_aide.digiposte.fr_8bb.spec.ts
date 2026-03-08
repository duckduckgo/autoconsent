import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aide.digiposte.fr_8bb', ['https://aide.digiposte.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
