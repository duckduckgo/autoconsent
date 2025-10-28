import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_satchelone.com_re5', ['https://www.satchelone.com/v7/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
