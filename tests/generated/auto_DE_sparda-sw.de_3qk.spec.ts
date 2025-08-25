import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparda-sw.de_3qk', ['https://www.sparda-sw.de/privatkunden.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
