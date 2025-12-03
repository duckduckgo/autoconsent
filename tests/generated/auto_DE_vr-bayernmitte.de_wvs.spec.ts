import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vr-bayernmitte.de_wvs', ['https://www.vr-bayernmitte.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
