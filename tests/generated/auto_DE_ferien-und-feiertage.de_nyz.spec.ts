import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ferien-und-feiertage.de_nyz', ['https://www.ferien-und-feiertage.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
