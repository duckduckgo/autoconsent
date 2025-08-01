import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spk-in-ei.de_z40', ['https://www.spk-in-ei.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
