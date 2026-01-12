import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_morgandetoi.fr_e8r', ['https://www.morgandetoi.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
