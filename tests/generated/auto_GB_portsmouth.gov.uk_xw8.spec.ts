import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_portsmouth.gov.uk_xw8', ['https://www.portsmouth.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
