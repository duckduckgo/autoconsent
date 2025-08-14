import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_via-ferrata.de_bbr', ['https://www.via-ferrata.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
