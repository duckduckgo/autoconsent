import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vb-rb.de_c4a', ['https://www.vb-rb.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
