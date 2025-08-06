import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vr-rheinahreifel.de_ube', ['https://www.vr-rheinahreifel.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
