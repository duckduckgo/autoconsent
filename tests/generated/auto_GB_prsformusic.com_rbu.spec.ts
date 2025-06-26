import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_prsformusic.com_rbu', ['https://www.prsformusic.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
