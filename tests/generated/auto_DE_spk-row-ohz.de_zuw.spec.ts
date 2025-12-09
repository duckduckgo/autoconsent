import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spk-row-ohz.de_zuw', ['https://www.spk-row-ohz.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
