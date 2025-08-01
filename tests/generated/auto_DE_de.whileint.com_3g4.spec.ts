import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.whileint.com_3g4', ['https://de.whileint.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
