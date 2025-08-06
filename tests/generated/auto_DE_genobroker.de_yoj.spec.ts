import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_genobroker.de_yoj', ['https://www.genobroker.de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
