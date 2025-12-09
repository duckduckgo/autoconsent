import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_brynsenter.no_uta', ['https://www.brynsenter.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
