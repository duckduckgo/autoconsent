import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berlin.alba.info_lb0', ['https://berlin.alba.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
