import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-pforzheim-calw.de_krf', ['https://www.sparkasse-pforzheim-calw.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
