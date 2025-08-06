import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_expertimpots.com_5p9', ['https://expertimpots.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
