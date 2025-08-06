import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_scaleway.com_ii7', ['https://www.scaleway.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
