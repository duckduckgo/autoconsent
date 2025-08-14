import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spk-chemnitz.de_3ep', ['https://www.spk-chemnitz.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
