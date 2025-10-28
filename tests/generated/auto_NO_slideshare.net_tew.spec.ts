import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_slideshare.net_tew', ['https://www.slideshare.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
