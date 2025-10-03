import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wurzelwissen.de_3dk', ['https://www.wurzelwissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
