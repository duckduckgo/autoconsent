import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_media.stellantis.com_rt4', ['https://www.media.stellantis.com/em-en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
