import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elektrofachkraft.de_jc0', ['https://www.elektrofachkraft.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
