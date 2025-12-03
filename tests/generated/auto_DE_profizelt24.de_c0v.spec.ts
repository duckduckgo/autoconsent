import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_profizelt24.de_c0v', ['https://www.profizelt24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
