import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wvb.de_rxg', ['https://www.wvb.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
