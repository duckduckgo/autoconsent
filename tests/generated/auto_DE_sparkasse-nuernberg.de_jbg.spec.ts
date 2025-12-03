import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-nuernberg.de_jbg', ['https://www.sparkasse-nuernberg.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
