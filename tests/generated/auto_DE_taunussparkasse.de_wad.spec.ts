import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_taunussparkasse.de_wad', ['https://www.taunussparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
