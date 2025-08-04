import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_media.stellantis.com_sks', ['https://www.media.stellantis.com/em-en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
