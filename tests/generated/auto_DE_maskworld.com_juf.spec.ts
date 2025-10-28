import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_maskworld.com_juf', ['https://www.maskworld.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
