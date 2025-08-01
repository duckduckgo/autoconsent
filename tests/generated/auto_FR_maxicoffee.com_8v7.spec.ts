import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maxicoffee.com_8v7', ['https://www.maxicoffee.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
