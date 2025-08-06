import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maxicoffee.com_c6u', ['https://www.maxicoffee.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
