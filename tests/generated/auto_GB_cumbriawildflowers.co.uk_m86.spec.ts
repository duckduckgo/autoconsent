import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cumbriawildflowers.co.uk_m86', ['https://cumbriawildflowers.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
