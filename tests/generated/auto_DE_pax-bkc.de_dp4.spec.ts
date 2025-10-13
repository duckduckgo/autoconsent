import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pax-bkc.de_dp4', ['https://www.pax-bkc.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
