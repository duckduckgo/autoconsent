import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_feierabend.de_kr4', ['https://www.feierabend.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
