import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_epochtimes.se_xlu', ['https://www.epochtimes.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
