import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_roofingsuperstore.co.uk_0', ['https://www.roofingsuperstore.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
