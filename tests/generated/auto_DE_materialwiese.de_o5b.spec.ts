import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_materialwiese.de_o5b', ['https://materialwiese.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
