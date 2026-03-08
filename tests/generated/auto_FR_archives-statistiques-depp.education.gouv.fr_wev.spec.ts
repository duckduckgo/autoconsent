import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives-statistiques-depp.education.gouv.fr_wev', ['https://archives-statistiques-depp.education.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
