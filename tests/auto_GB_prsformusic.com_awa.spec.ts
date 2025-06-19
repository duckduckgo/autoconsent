import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_prsformusic.com_awa', ['https://www.prsformusic.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
