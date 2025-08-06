import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_village-hotels.co.uk_hsa', ['https://www.village-hotels.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
