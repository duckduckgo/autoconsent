import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_barbara-klein.com_bpp', ['https://barbara-klein.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
