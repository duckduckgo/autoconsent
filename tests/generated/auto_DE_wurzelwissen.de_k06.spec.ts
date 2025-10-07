import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wurzelwissen.de_k06', ['https://www.wurzelwissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
