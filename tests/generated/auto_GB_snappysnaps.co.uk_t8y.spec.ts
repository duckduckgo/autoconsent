import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_snappysnaps.co.uk_t8y', ['https://www.snappysnaps.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
