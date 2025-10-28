import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stretta-music.de_b75', ['https://www.stretta-music.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
