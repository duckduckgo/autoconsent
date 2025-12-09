import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_morgandetoi.fr_cd3', ['https://www.morgandetoi.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
