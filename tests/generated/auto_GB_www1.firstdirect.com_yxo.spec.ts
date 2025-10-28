import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_www1.firstdirect.com_yxo', ['https://www.firstdirect.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
