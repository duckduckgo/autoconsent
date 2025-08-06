import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_via-ferrata.de_l9u', ['https://www.via-ferrata.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
