import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_abandonwaregames.net_z1r', ['https://abandonwaregames.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
