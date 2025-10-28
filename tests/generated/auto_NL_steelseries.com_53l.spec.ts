import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_steelseries.com_53l', ['https://steelseries.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
