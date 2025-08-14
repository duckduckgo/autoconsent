import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_buerklin.com_bya', ['https://www.buerklin.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
