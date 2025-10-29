import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_maskworld.com_qfq', ['https://www.maskworld.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
