import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_a-bikeshop.com_u7s', ['https://a-bikeshop.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
