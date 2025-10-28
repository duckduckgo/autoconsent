import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_blstworld.com_ejf', ['https://blstworld.com/en-NO'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
