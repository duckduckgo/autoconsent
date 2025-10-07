import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_saalesparkasse.de_x3i', ['https://www.saalesparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
