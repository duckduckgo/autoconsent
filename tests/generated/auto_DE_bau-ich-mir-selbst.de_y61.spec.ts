import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bau-ich-mir-selbst.de_y61', ['https://bau-ich-mir-selbst.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
