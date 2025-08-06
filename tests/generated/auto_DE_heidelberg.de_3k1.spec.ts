import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_heidelberg.de_3k1', ['https://www.heidelberg.de/hd/HD.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
