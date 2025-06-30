import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_servicenow.com_j1d', ['https://www.servicenow.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
