import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_billboard.com_x0a', ['https://www.billboard.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
