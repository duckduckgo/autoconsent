import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_help.revolut.com_0', ['https://help.revolut.com/help/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
