import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_campingplatzhelden.de_mc5', ['https://campingplatzhelden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
