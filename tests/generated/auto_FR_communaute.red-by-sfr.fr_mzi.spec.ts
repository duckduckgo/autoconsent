import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_communaute.red-by-sfr.fr_mzi', ['https://communaute.red-by-sfr.fr/t5/Forums/ct-p/Forums'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
