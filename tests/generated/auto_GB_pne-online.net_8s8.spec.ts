import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pne-online.net_8s8', ['https://pne-online.net/forum/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
