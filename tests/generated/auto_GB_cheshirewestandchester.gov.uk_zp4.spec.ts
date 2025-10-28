import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cheshirewestandchester.gov.uk_zp4', ['https://www.cheshirewestandchester.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
