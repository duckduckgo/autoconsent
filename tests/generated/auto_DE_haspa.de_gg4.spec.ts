import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_haspa.de_gg4', ['https://www.haspa.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
