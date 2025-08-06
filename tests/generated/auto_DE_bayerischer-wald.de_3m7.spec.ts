import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bayerischer-wald.de_3m7', ['https://www.bayerischer-wald.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
