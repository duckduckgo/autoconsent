import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cityoflondon.gov.uk_2xz', ['https://www.cityoflondon.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
