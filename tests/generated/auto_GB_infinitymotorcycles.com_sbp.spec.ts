import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_infinitymotorcycles.com_sbp', ['https://www.infinitymotorcycles.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
