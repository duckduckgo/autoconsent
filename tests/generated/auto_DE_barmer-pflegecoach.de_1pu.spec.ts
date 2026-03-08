import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_barmer-pflegecoach.de_1pu', ['https://barmer-pflegecoach.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
