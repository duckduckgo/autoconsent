import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_teekampagne.de_5tg', ['https://www.teekampagne.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
