import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_prsformusic.com_wgx', ['https://www.prsformusic.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
