import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_musikhaus-korn.de_r58', ['https://www.musikhaus-korn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
