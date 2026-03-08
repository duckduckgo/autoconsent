import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_adults.wiltshire.gov.uk_gdm', ['https://adults.wiltshire.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
