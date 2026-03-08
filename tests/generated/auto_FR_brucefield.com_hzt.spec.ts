import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_brucefield.com_hzt', ['https://brucefield.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
