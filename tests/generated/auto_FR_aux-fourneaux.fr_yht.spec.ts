import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aux-fourneaux.fr_yht', ['https://www.aux-fourneaux.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
