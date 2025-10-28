import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_presaje.sga.defense.gouv.fr_5ex', ['https://presaje.sga.defense.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
