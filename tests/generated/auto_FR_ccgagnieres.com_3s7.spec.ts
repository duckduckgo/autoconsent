import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ccgagnieres.com_3s7', ['https://ccgagnieres.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
