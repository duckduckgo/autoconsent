import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_feiertage-ferien.de_xnq', ['https://www.feiertage-ferien.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
