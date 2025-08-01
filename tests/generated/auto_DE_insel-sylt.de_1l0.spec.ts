import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_insel-sylt.de_1l0', ['https://www.insel-sylt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
