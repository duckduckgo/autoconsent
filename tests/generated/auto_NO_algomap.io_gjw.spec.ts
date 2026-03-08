import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_algomap.io_gjw', ['https://algomap.io/bootcamp-landing?'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
