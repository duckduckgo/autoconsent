import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_myfitnesspal.com_ea5', ['https://www.myfitnesspal.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
