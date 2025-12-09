import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erzgebirgssparkasse.de_onp', ['https://www.erzgebirgssparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
