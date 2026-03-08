import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_agrob-buchtal.de_t2q', ['https://agrob-buchtal.de/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
