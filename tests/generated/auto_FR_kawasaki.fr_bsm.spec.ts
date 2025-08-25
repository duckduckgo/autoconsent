import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_kawasaki.fr_bsm', ['https://www.kawasaki.fr/fr/products'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
