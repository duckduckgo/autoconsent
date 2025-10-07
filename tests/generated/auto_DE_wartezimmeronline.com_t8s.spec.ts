import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wartezimmeronline.com_t8s', ['https://wartezimmeronline.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
