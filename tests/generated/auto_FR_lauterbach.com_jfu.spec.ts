import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lauterbach.com_jfu', ['https://www.lauterbach.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
