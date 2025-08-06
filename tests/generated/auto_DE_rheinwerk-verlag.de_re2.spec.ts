import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rheinwerk-verlag.de_re2', ['https://www.rheinwerk-verlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
