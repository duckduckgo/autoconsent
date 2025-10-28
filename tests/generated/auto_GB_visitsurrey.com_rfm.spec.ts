import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_visitsurrey.com_rfm', ['https://www.visitsurrey.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
