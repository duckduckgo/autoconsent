import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutsches-sportabzeichen.de_sto', ['https://deutsches-sportabzeichen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
