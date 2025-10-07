import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_riverisland.com_qin', ['https://www.riverisland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
