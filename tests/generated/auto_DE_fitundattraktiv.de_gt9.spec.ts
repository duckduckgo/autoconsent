import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fitundattraktiv.de_gt9', ['https://www.fitundattraktiv.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
