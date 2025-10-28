import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-saarland.de_e0c', ['https://www.uni-saarland.de/start.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
