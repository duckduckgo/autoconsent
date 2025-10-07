import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_yorkshiretrading.com_0', ['https://www.yorkshiretrading.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
