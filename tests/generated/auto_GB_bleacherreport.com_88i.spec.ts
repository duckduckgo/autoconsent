import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bleacherreport.com_88i', ['https://bleacherreport.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
