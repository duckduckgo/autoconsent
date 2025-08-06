import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bureau-vallee.fr_rc0', ['https://www.bureau-vallee.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
