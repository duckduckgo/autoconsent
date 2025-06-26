import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_myfitnesspal.com_c1l', ['https://www.myfitnesspal.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
