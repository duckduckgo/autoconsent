import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutsches-sportabzeichen.de_4b1', ['https://deutsches-sportabzeichen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
