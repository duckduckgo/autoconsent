import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_emploi-collectivites.fr_w33', ['https://www.emploi-collectivites.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
