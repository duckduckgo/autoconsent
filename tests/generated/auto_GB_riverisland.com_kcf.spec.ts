import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_riverisland.com_kcf', ['https://www.riverisland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
