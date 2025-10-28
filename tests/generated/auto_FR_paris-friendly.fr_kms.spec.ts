import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_paris-friendly.fr_kms', ['https://www.paris-friendly.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
