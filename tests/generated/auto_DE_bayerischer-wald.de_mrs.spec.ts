import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bayerischer-wald.de_mrs', ['https://www.bayerischer-wald.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
