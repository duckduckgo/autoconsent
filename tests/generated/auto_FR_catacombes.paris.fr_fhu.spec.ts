import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_catacombes.paris.fr_fhu', ['https://www.catacombes.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
