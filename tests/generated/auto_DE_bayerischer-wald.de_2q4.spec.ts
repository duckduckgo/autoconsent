import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bayerischer-wald.de_2q4', ['https://www.bayerischer-wald.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
