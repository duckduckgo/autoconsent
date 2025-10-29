import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_raabkarcher.de_g72', ['https://www.raabkarcher.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
