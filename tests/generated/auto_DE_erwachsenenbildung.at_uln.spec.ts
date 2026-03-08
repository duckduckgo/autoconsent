import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erwachsenenbildung.at_uln', ['https://erwachsenenbildung.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
