import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_transport.gov.scot_0', ['https://www.transport.gov.scot/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
