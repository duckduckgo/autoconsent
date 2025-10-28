import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gelenkexperten.com_rgl', ['https://gelenkexperten.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
