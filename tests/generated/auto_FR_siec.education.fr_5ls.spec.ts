import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_siec.education.fr_5ls', ['https://siec.education.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
