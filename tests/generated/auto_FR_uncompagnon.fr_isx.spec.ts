import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_uncompagnon.fr_isx', ['https://www.uncompagnon.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
