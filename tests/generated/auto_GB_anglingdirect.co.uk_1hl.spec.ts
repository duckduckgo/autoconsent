import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_anglingdirect.co.uk_1hl', ['https://www.anglingdirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
