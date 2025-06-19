import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_longevity.technology_1lp', ['https://longevity.technology/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
