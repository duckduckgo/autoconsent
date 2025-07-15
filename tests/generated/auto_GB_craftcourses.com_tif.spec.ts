import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_craftcourses.com_tif', ['https://www.craftcourses.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
