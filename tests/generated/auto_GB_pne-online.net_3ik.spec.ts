import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pne-online.net_3ik', ['https://pne-online.net/forum/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
