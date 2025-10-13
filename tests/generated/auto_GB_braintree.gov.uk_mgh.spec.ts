import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_braintree.gov.uk_mgh', ['https://www.braintree.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
