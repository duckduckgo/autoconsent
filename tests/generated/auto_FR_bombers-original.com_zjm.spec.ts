import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bombers-original.com_zjm', ['https://bombers-original.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
