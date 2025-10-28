import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_basketball-reference.com_d54', ['https://www.basketball-reference.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
