import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ebike-warehouse.de_oh6', ['https://ebike-warehouse.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
