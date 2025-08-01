import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monprojet.anah.gouv.fr_5fm', ['https://monprojet.anah.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
