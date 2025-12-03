import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vrbank-lb.de_jpc', ['https://www.vrbank-lb.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
