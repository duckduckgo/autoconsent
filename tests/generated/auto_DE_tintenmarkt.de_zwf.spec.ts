import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tintenmarkt.de_zwf', ['https://www.tintenmarkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
