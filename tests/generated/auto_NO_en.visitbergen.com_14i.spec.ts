import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_en.visitbergen.com_14i', ['https://en.visitbergen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
