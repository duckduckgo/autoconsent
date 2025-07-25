import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_wallstreetenglish.fr_sje', ['https://wallstreetenglish.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
