import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_circulareconomy.europa.eu_218', ['https://circulareconomy.europa.eu/platform/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
