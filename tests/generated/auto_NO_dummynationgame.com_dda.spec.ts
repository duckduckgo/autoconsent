import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dummynationgame.com_dda', ['https://dummynationgame.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
