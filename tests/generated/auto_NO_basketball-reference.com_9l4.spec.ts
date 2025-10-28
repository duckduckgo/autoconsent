import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_basketball-reference.com_9l4', ['https://www.basketball-reference.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
