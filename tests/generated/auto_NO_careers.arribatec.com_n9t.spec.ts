import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_careers.arribatec.com_n9t', ['https://careers.arribatec.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
