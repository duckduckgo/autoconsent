import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eprel.ec.europa.eu_x77', ['https://eprel.ec.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
