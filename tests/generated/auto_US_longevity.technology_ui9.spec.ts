import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_longevity.technology_ui9', ['https://longevity.technology/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
