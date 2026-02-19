import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_feiertage-ferien.de_zo8', ['https://www.feiertage-ferien.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
