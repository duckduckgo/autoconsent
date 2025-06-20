import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_myfitnesspal.com_eb9', ['https://www.myfitnesspal.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
