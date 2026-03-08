import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_collectible.design_z20', ['https://collectible.design/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
