import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_freudenstadt.de_wud', ['https://www.freudenstadt.de/willkommen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
