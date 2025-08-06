import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-re.de_at1', ['https://www.sparkasse-re.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
