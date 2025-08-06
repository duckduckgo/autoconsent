import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_haspa.de_9sj', ['https://www.haspa.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
