import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_myfitnesspal.com_m4q', ['https://www.myfitnesspal.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
