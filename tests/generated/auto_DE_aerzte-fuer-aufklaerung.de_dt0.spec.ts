import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aerzte-fuer-aufklaerung.de_dt0', ['https://aerzte-fuer-aufklaerung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
