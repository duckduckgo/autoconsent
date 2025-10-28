import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lesiteimmo.com_7qs', ['https://www.lesiteimmo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
