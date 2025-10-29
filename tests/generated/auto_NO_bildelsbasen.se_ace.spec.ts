import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bildelsbasen.se_ace', ['https://www.bildelsbasen.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
