import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_allstarlink.github.io_n5v', ['https://allstarlink.github.io/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
