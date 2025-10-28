import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_illumsbolighus.com_7hq', ['https://www.illumsbolighus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
