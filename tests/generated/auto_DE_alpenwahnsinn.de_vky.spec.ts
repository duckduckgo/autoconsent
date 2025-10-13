import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alpenwahnsinn.de_vky', ['https://www.alpenwahnsinn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
