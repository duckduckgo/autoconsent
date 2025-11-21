import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_materialwiese.de_410', ['https://materialwiese.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
