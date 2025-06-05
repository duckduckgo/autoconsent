import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_businessclass.com_0', ['https://www.businessclass.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
