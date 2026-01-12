import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_thalia-theater.de_n4x', ['https://www.thalia-theater.de/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
