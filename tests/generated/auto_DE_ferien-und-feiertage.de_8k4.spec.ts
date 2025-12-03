import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ferien-und-feiertage.de_8k4', ['https://www.ferien-und-feiertage.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
