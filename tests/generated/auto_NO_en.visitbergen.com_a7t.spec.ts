import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_en.visitbergen.com_a7t', ['https://en.visitbergen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
