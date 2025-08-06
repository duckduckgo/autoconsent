import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparda-n.de_xi5', ['https://www.sparda-n.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
