import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_devenirenseignant.gouv.fr_tkk', ['https://www.devenirenseignant.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
