import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_web.magentatv.de_jja', ['https://web.magentatv.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
