import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spk-ro-aib.de_gnl', ['https://www.spk-ro-aib.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
