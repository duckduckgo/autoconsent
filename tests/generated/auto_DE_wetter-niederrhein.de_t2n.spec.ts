import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wetter-niederrhein.de_t2n', ['https://wetter-niederrhein.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
