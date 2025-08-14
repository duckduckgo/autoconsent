import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_web.magentatv.de_3kv', ['https://web.magentatv.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
