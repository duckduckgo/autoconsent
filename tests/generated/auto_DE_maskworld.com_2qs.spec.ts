import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_maskworld.com_2qs', ['https://www.maskworld.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
