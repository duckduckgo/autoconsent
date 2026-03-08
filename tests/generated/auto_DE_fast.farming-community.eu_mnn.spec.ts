import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fast.farming-community.eu_mnn', ['https://fast.farming-community.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
