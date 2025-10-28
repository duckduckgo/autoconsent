import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_feiertage-ferien.de_e2c', ['https://www.feiertage-ferien.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
