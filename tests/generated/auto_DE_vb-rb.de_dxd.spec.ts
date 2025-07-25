import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vb-rb.de_dxd', ['https://www.vb-rb.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
