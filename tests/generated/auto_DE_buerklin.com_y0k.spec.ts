import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_buerklin.com_y0k', ['https://www.buerklin.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
