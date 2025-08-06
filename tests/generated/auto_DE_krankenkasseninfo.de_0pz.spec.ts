import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_krankenkasseninfo.de_0pz', ['https://www.krankenkasseninfo.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
