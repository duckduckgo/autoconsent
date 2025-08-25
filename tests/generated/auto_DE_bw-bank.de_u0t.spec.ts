import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bw-bank.de_u0t', ['https://www.bw-bank.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
