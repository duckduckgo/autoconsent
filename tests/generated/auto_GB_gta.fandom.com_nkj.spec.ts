import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gta.fandom.com_nkj', ['https://gta.fandom.com/wiki/Main_Page'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
