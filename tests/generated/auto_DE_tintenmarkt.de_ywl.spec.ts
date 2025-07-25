import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tintenmarkt.de_ywl', ['https://www.tintenmarkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
