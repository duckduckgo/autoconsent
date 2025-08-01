import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cosmosdirekt.de_0ei', ['https://www.cosmosdirekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
