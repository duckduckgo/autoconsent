import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_natesilver.net_p0q', ['https://www.natesilver.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
