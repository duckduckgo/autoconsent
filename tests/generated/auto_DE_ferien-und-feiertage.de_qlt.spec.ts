import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ferien-und-feiertage.de_qlt', ['https://www.ferien-und-feiertage.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
