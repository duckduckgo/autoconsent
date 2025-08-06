import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elektrofachkraft.de_7kk', ['https://www.elektrofachkraft.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
