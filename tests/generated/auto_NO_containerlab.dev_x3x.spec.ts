import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_containerlab.dev_x3x', ['https://containerlab.dev/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
