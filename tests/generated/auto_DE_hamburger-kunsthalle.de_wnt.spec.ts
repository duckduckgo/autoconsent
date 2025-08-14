import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hamburger-kunsthalle.de_wnt', ['https://www.hamburger-kunsthalle.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
