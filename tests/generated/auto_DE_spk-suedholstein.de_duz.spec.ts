import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spk-suedholstein.de_duz', ['https://www.spk-suedholstein.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
