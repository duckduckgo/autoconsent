import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_footballmanager.com_4yp', ['https://www.footballmanager.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
