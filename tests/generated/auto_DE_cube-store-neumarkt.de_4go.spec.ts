import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cube-store-neumarkt.de_4go', ['https://cube-store-neumarkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
