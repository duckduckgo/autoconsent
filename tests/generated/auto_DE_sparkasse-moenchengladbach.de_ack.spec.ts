import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-moenchengladbach.de_ack', ['https://www.sparkasse-moenchengladbach.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
