import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_leparking-moto.fr_znf', ['https://www.leparking-moto.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
