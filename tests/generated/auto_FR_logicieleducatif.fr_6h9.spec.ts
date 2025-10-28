import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_logicieleducatif.fr_6h9', ['https://www.logicieleducatif.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
