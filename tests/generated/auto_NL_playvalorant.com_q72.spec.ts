import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_playvalorant.com_q72', ['https://playvalorant.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
