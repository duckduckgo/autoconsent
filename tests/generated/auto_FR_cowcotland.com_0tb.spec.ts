import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cowcotland.com_0tb', ['https://www.cowcotland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
