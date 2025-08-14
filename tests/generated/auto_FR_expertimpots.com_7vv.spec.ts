import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_expertimpots.com_7vv', ['https://expertimpots.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
