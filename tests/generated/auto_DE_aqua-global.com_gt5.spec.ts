import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aqua-global.com_gt5', ['https://aqua-global.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
