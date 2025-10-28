import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bioaufvorrat.de_uc0', ['https://bioaufvorrat.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
