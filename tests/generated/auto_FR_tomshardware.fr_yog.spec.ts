import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tomshardware.fr_yog', ['https://www.tomshardware.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
