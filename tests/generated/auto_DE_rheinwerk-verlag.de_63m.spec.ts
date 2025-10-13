import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rheinwerk-verlag.de_63m', ['https://www.rheinwerk-verlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
