import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_speedadmin.com_7c3', ['https://www.speedadmin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
