import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_1001pieces.com_lxb', ['https://www.1001pieces.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
