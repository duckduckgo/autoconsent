import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pinterest.com_0ks', ['https://www.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
