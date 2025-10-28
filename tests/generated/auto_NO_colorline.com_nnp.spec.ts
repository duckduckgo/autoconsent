import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_colorline.com_nnp', ['https://www.colorline.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
