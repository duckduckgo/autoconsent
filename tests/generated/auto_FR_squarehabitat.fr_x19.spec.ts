import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_squarehabitat.fr_x19', ['https://www.squarehabitat.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
