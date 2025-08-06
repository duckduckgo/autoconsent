import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_privatehealth.co.uk_a8a', ['https://www.privatehealth.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
