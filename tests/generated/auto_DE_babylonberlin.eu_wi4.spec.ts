import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_babylonberlin.eu_wi4', ['https://babylonberlin.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
