import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_useyourlocal.com_olg', ['https://www.useyourlocal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
