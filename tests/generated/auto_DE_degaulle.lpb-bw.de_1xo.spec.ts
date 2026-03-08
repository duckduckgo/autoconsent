import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_degaulle.lpb-bw.de_1xo', ['https://degaulle.lpb-bw.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
