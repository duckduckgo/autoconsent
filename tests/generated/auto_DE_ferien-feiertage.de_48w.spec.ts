import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ferien-feiertage.de_48w', ['https://ferien-feiertage.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
