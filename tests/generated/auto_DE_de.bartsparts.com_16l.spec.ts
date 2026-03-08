import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.bartsparts.com_16l', ['https://de.bartsparts.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
