import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_webmailer.hosteurope.de_v5t', ['https://webmailer.hosteurope.de/login.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
