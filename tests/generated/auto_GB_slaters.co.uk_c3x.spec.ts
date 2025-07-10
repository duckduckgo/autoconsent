import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_slaters.co.uk_c3x', ['https://www.slaters.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
