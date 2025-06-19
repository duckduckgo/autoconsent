import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_servicenow.com_n2l', ['https://www.servicenow.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
