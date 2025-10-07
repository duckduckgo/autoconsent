import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gelenkexperten.com_k5x', ['https://gelenkexperten.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
