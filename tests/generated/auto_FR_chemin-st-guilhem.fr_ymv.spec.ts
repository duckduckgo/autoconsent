import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chemin-st-guilhem.fr_ymv', ['https://chemin-st-guilhem.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
