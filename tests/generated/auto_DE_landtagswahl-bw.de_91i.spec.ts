import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landtagswahl-bw.de_91i', ['https://www.landtagswahl-bw.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
