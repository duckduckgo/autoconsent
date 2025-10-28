import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_donauwoerth.de_4y7', ['https://www.donauwoerth.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
