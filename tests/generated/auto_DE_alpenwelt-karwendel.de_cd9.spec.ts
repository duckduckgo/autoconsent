import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alpenwelt-karwendel.de_cd9', ['https://www.alpenwelt-karwendel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
