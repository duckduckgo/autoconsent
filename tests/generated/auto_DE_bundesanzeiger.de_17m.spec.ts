import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bundesanzeiger.de_17m', ['https://www.bundesanzeiger.de/pub/de/start?0'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
