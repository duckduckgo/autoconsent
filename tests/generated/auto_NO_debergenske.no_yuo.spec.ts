import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_debergenske.no_yuo', ['https://www.debergenske.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
