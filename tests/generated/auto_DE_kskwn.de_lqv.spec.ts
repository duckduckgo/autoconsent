import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kskwn.de_lqv', ['https://www.kskwn.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
