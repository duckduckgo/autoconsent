import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_accuratescribe.ai_hfn', ['https://accuratescribe.ai/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
