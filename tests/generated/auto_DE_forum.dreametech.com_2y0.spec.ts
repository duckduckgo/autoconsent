import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forum.dreametech.com_2y0', ['https://forum.dreametech.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
