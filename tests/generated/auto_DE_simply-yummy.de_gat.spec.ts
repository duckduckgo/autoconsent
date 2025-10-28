import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_simply-yummy.de_gat', ['https://www.simply-yummy.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
