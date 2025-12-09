import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_centerpartiet.se_eik', ['https://www.centerpartiet.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
