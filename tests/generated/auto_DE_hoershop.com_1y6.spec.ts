import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hoershop.com_1y6', ['https://www.hoershop.com/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
