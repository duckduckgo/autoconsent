import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_riverisland.com_90x', ['https://www.riverisland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
