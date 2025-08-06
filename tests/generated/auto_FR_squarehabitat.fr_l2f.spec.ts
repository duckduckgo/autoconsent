import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_squarehabitat.fr_l2f', ['https://www.squarehabitat.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
