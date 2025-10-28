import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_transformarticles.com_0x4', ['https://www.transformarticles.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
