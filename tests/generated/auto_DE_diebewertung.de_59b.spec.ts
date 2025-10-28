import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_diebewertung.de_59b', ['https://www.diebewertung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
