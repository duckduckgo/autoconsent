import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_careers.remarkable.com_buv', ['https://careers.remarkable.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
