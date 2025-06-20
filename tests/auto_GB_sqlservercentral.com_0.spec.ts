import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_sqlservercentral.com_0', ['https://www.sqlservercentral.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
