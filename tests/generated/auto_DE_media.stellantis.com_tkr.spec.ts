import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_media.stellantis.com_tkr', ['https://www.media.stellantis.com/em-en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
