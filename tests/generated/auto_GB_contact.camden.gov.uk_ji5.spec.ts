import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_contact.camden.gov.uk_ji5', ['https://contact.camden.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
