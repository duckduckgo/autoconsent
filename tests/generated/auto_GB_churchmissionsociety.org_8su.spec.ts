import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_churchmissionsociety.org_8su', ['https://churchmissionsociety.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
