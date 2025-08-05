import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tobycarvery.co.uk_0', ['https://www.tobycarvery.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
