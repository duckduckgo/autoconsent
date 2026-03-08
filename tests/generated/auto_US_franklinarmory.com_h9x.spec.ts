import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_franklinarmory.com_h9x', ['https://franklinarmory.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
