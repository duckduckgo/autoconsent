import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_maidstone.gov.uk_zkk', ['https://maidstone.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
