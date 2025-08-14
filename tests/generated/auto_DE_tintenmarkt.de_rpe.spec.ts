import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tintenmarkt.de_rpe', ['https://www.tintenmarkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
