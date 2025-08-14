import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_heidelberg.de_x2e', ['https://www.heidelberg.de/hd/HD.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
