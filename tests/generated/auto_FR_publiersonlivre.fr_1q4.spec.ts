import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_publiersonlivre.fr_1q4', ['https://publiersonlivre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
