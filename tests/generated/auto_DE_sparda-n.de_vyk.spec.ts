import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparda-n.de_vyk', ['https://www.sparda-n.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
