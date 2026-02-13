import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_business.amazon.de_rjz', ['https://business.amazon.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
