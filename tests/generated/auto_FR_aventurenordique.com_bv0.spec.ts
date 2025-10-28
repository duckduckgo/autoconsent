import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aventurenordique.com_bv0', ['https://www.aventurenordique.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
