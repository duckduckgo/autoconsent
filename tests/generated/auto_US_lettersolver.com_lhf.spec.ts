import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lettersolver.com_lhf', ['https://lettersolver.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
