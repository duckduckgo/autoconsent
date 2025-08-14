import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_privatehealth.co.uk_kji', ['https://www.privatehealth.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
