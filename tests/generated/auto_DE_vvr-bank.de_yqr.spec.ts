import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vvr-bank.de_yqr', ['https://www.vvr-bank.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
