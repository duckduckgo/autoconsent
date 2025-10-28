import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_normanrecords.com_6mw', ['https://www.normanrecords.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
