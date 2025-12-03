import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_saalesparkasse.de_txu', ['https://www.saalesparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
