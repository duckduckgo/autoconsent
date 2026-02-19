import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_materialwiese.de_l8y', ['https://materialwiese.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
