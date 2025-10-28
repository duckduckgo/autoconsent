import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_essentialaids.com_oij', ['https://www.essentialaids.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
