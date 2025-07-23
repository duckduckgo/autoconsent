import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_natesilver.net_g8q', ['https://www.natesilver.net/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
