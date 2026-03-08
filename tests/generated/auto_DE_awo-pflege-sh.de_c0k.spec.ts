import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_awo-pflege-sh.de_c0k', ['https://awo-pflege-sh.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
