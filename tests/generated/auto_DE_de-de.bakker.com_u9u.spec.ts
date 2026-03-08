import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de-de.bakker.com_u9u', ['https://de-de.bakker.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
