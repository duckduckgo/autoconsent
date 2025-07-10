import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tandfonline.com_fj7', ['https://www.tandfonline.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
