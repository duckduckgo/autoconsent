import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chateauversailles.fr_w2k', ['https://www.chateauversailles.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
