import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_webmailer.hosteurope.de_5ih', ['https://webmailer.hosteurope.de/login.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
