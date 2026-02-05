import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pinterest.com_m3y', ['https://www.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
