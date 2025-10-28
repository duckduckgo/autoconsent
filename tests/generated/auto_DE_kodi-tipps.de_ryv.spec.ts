import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kodi-tipps.de_ryv', ['https://www.kodi-tipps.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
