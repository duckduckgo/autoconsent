import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erzieherin-ausbildung.de_lv2', ['https://www.erzieherin-ausbildung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
