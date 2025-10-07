import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_siec.education.fr_2ax', ['https://siec.education.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
