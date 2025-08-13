import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_regeringen.se_uhv', ['https://www.regeringen.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
