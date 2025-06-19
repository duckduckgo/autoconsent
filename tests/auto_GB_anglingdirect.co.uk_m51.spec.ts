import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_anglingdirect.co.uk_m51', ['https://www.anglingdirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
