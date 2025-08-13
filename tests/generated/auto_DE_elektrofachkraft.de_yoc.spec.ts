import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elektrofachkraft.de_yoc', ['https://www.elektrofachkraft.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
