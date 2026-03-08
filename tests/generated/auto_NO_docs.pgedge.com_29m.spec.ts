import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_docs.pgedge.com_29m', ['https://docs.pgedge.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
