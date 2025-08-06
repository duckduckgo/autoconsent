import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-mainfranken.de_aov', ['https://www.sparkasse-mainfranken.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
