import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bonnorange.de_kt7', ['https://www.bonnorange.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
