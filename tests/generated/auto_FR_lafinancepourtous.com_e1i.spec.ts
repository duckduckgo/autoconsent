import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lafinancepourtous.com_e1i', ['https://www.lafinancepourtous.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
