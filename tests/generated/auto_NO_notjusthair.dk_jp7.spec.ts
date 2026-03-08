import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_notjusthair.dk_jp7', ['http://www.notjusthair.dk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
