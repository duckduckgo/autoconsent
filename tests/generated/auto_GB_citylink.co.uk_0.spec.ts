import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_citylink.co.uk_0', ['https://www.citylink.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
