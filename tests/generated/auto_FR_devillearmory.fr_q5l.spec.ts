import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_devillearmory.fr_q5l', ['https://devillearmory.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
