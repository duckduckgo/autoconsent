import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_livejasmin.com_9wk', ['https://www.livejasmin.com/en/girls'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
