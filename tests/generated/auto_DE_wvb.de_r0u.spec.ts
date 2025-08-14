import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wvb.de_r0u', ['https://www.wvb.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
