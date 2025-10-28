import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_livreshebdo.fr_6nk', ['https://www.livreshebdo.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
